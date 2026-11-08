<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\ContactController;

Route::post('/contact', [ContactController::class, 'store']);
Route::get('/certificates', [CertificateController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::post('/projects', [ProjectController::class, 'store']);