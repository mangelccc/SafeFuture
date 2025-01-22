<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\RutinaController;
use App\Http\Controllers\DietaController;

// Rutas para Usuarios
Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::get('/usuarios/{id}', [UsuarioController::class, 'show']);
Route::post('/usuarios', [UsuarioController::class, 'store']);
Route::put('/usuarios/{id}', [UsuarioController::class, 'update']);
Route::patch('/usuarios/{id}', [UsuarioController::class, 'updatePartial']);
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']);

// Rutas para Rutinas
Route::get('/rutinas', [RutinaController::class, 'index']);
Route::get('/rutinas/{id}', [RutinaController::class, 'show']);
Route::post('/rutinas', [RutinaController::class, 'store']);
Route::put('/rutinas/{id}', [RutinaController::class, 'update']);
Route::patch('/rutinas/{id}', [RutinaController::class, 'updatePartial']);
Route::delete('/rutinas/{id}', [RutinaController::class, 'destroy']);

// Rutas para Dietas
Route::get('/dietas', [DietaController::class, 'index']);
Route::get('/dietas/{id}', [DietaController::class, 'show']);
Route::post('/dietas', [DietaController::class, 'store']);
Route::put('/dietas/{id}', [DietaController::class, 'update']);
Route::patch('/dietas/{id}', [DietaController::class, 'updatePartial']);
Route::delete('/dietas/{id}', [DietaController::class, 'destroy']);



