# Ismail Sedrati - Full Stack Developer Portfolio

A modern, responsive, and professional Full Stack Developer Portfolio website built for **Ismail Sedrati**, Web Developer based in Rabat, Morocco. Designed with a dark charcoal aesthetic, bold agency-level typography, interactive project showcases, verified certifications viewer, and a real Node.js + Express backend for contact messaging.

Inspired by creative agency portfolios with dark charcoal tones, subtle silver accents, and concentric glowing graphics.

---

## 🚀 Live Demo & Links

- **Current Portfolio Deployment**: [Sedratii Netlify](https://sedratii.netlify.app/)
- **C-Style Fashion Store**: [https://c-stylee.netlify.app/](https://c-stylee.netlify.app/)
- **Cavo Coffee Shop**: [https://cavo-coffe.netlify.app/](https://cavo-coffe.netlify.app/)
- **TaskFlow / To-Do App**: [https://todo-listee.netlify.app/](https://todo-listee.netlify.app/)
- **Email**: [smailsedrati00@gmail.com](mailto:smailsedrati00@gmail.com)
- **LinkedIn**: [linkedin.com/in/ismail-sedrati](https://linkedin.com/in/ismail-sedrati)
- **GitHub**: [github.com/sedrati-ismail](https://github.com/sedrati-ismail)

---

## 🛠️ Tech Stack

### Frontend
- **React.js 19** with **TypeScript**
- **Vite** build tooling
- **Tailwind CSS v4** with custom styling
- **Lucide React** icon system
- **Google Fonts** (`Syne` for large bold headlines, `Plus Jakarta Sans` for body, `JetBrains Mono` for tabular metadata)

### Backend
- **Node.js** & **Express.js**
- RESTful API endpoints:
  - `POST /api/contact` - Validates and persists contact inquiries
  - `GET /api/contact/messages` - Retrieves received contact messages
  - `DELETE /api/contact/messages/:id` - Deletes a contact message
  - `GET /api/health` - Server health probe
- JSON file persistence (`data/messages.json`)

---

## 🎨 Design System & Palette

- **Main Background**: `#17191F` (Dark Charcoal)
- **Secondary Background**: `#22252D`
- **Card Surfaces**: `#292D36`
- **Primary Text**: `#F5F5F5` (White)
- **Secondary Text**: `#A5A7AD` (Light Gray)
- **Accents**: Subtle Silver, Emerald status indicators, glowing concentric vector rings behind the portrait

---

## 📂 Project Architecture

```
portfolio/
├── client/ (integrated Vite SPA)
│   └── src/
│       ├── components/
│       │   ├── Navbar.tsx             # 3-Zone fixed navigation + mobile drawer
│       │   ├── ProjectCard.tsx        # Project card with demo & github links
│       │   ├── ProjectModal.tsx       # Detailed project lightbox preview
│       │   ├── CertificateCard.tsx    # Card for verified achievements
│       │   ├── CertificateModal.tsx   # PDF document viewer modal
│       │   ├── ResumeModal.tsx        # Recruiter-ready printable CV
│       │   ├── MessagesDrawer.tsx     # Inbox viewer for backend submissions
│       │   └── Footer.tsx             # Brand footer & quick links
│       ├── sections/
│       │   ├── HeroSection.tsx        # Bold typography headline + portrait
│       │   ├── StatsSection.tsx       # 4 statistics cards (Years, Projects, Tech, Passion)
│       │   ├── ProjectsSection.tsx    # Featured work with category filters
│       │   ├── AboutSection.tsx       # Personal bio & education badges
│       │   ├── SkillsSection.tsx      # Core capabilities & categorized toolset
│       │   ├── EducationSection.tsx   # ISTA NTIC Hay Riad timeline
│       │   ├── CertificationsSection.tsx # Dedicated certificate showcase
│       │   ├── ProcessSection.tsx     # 5-step development workflow
│       │   └── ContactSection.tsx     # Functional Express contact form
│       ├── data/
│       │   └── portfolioData.ts       # All profile data, projects & certificates
│       ├── App.tsx                    # Main layout and modal manager
│       ├── index.css                  # Tailwind styles and custom animations
│       └── main.tsx                   # React client entry point
├── server/
│   └── server.ts                      # Express server + Vite middleware
├── public/
│   └── assets/                        # PDF certificates, portrait & project screenshots
├── package.json
└── tsconfig.json
```

---

## 💻 Installation & Local Setup

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server (Full Stack)
The development script launches Express on port 3000 with Vite middleware attached:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📝 How to Update Content

All content is centralized in `src/data/portfolioData.ts`:

- **Edit Profile, Bio, or Social Links**:
  Update `PORTFOLIO_DATA.profile`.
- **Add / Edit Projects**:
  Add a new object to `PORTFOLIO_DATA.projects` with title, image path, technologies, live demo link, and github link.
- **Add New Certificates**:
  1. Drop your PDF or image into `public/assets/`
  2. Add an entry to `PORTFOLIO_DATA.certifications` with the title, issuer, issue date, and fileUrl.
- **Update Skills**:
  Add or modify items in `PORTFOLIO_DATA.skills` (Frontend, Backend, Database, Tools).
- **Update Statistics**:
  Update numbers in `PORTFOLIO_DATA.stats`.

---

## 📜 License

Created for Ismail Sedrati © 2026. All rights reserved.
