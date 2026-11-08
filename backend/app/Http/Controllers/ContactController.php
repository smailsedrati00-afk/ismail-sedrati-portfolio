<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validation d les données
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // 2. Sajlo f la base de données (table contacts)
        Contact::create($validated);

        // 3. Sift l-email l Gmail dyalk b Mail::raw (Bدون .send())
        Mail::raw(
            "New message from your portfolio:\n\n" .
            "Name: {$validated['name']}\n" .
            "Email: {$validated['email']}\n" .
            "Subject: {$validated['subject']}\n\n" .
            "Message:\n{$validated['message']}", 
            function ($message) use ($validated) {
                $message->to('smailsedrati00@gmail.com')
                        ->subject('Portfolio Message: ' . $validated['subject'])
                        ->replyTo($validated['email'], $validated['name']);
            }
        );

        // 4. Rdd Response l React
        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully!'
        ], 200);
    }
}