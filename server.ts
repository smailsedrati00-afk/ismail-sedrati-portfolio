import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  ip?: string;
  userAgent?: string;
}

const DATA_DIR = path.resolve(__dirname, 'data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Ensure data folder and messages file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadMessages(): ContactMessage[] {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = fs.readFileSync(MESSAGES_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Failed to read messages file:', err);
  }
  return [];
}

function saveMessages(messages: ContactMessage[]) {
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write messages file:', err);
  }
}

let storedMessages: ContactMessage[] = loadMessages();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'Ismail Sedrati Portfolio API',
      time: new Date().toISOString(),
    });
  });

  // Contact form submission endpoint
  app.post('/api/contact', (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validation
      const errors: Record<string, string> = {};

      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        errors.name = 'Please provide a valid name (at least 2 characters).';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
        errors.email = 'Please provide a valid email address.';
      }

      if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
        errors.subject = 'Please provide a subject.';
      }

      if (!message || typeof message !== 'string' || message.trim().length < 10) {
        errors.message = 'Please provide a detailed message (at least 10 characters).';
      }

      if (Object.keys(errors).length > 0) {
        res.status(400).json({
          success: false,
          message: 'Validation failed. Please correct the highlighted errors.',
          errors,
        });
        return;
      }

      const newMessage: ContactMessage = {
        id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
        ip: req.ip || (req.headers['x-forwarded-for'] as string) || 'unknown',
        userAgent: req.headers['user-agent'] || 'unknown',
      };

      storedMessages.unshift(newMessage);
      saveMessages(storedMessages);

      console.log(`[Contact Form] New message received from ${newMessage.name} <${newMessage.email}>: "${newMessage.subject}"`);

      res.status(201).json({
        success: true,
        message: 'Thank you! Your message has been received by Ismail Sedrati. You will receive a reply shortly.',
        data: {
          id: newMessage.id,
          name: newMessage.name,
          subject: newMessage.subject,
          createdAt: newMessage.createdAt,
        },
      });
    } catch (error) {
      console.error('Error handling contact message:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error while processing your message. Please try again.',
      });
    }
  });

  // Endpoint to retrieve messages (useful for portfolio owner / reviewer verification)
  app.get('/api/contact/messages', (_req: Request, res: Response) => {
    res.json({
      success: true,
      count: storedMessages.length,
      messages: storedMessages,
    });
  });

  // Endpoint to clear or delete a message
  app.delete('/api/contact/messages/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const initialLen = storedMessages.length;
    storedMessages = storedMessages.filter((m) => m.id !== id);
    if (storedMessages.length !== initialLen) {
      saveMessages(storedMessages);
      res.json({ success: true, message: 'Message deleted successfully.' });
    } else {
      res.status(404).json({ success: false, message: 'Message not found.' });
    }
  });

  // Serve static files in production or hook Vite in development
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server started on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal server startup error:', err);
  process.exit(1);
});
