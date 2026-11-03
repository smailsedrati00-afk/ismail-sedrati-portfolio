<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    // Récupérer tous les projets
    public function index()
    {
        return response()->json(Project::all());
    }

    // Ajouter un nouveau projet
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|string',
            'link' => 'nullable|string',
        ]);

        $project = Project::create($validated);

        return response()->json($project, 201);
    }
}