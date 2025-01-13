<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\usuariosController;

 Route::get('/usuarios', [usuariosController::class, 'index']);

Route::get('/usuarios/{id}', [usuariosController::class, 'show']);

Route::post('/usuarios', [usuariosController::class, 'store']);

Route::put('/usuarios/{id}', [usuariosController::class, 'update']);

Route::patch('/usuarios/{id}', [usuariosController::class, 'updatePartial']);

Route::delete('/usuarios/{id}', [usuariosController::class, 'destroy']);
