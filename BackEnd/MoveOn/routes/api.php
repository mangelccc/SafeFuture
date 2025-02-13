<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\AlimentoController;
use App\Http\Controllers\PaisController;
use App\Http\Controllers\CiudadController;
use App\Http\Controllers\RutinaController;
use App\Http\Controllers\DietaController;
use App\Http\Controllers\EjercicioController;
use App\Http\Controllers\TrasladoController;
use App\Http\Controllers\UsuarioDietaController;
use App\Http\Controllers\RutinaEjercicioController;
use App\Http\Controllers\UsuarioRutinaController;

// Rutas para Usuarios
Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::get('/usuarios/{id}', [UsuarioController::class, 'show']);
Route::post('/usuarios', [UsuarioController::class, 'store']);
Route::put('/usuarios/{id}', [UsuarioController::class, 'update']);
Route::patch('/usuarios/{id}', [UsuarioController::class, 'updatePartial']);
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']);

Route::post('/login', [UsuarioController::class, 'login']);

// Rutas para Alimentos
Route::get('/alimentos', [AlimentoController::class, 'index']);
Route::get('/alimentos/{id}', [AlimentoController::class, 'show']);
Route::post('/alimentos', [AlimentoController::class, 'store']);
Route::put('/alimentos/{id}', [AlimentoController::class, 'update']);
Route::patch('/alimentos/{id}', [AlimentoController::class, 'updatePartial']);
Route::delete('/alimentos/{id}', [AlimentoController::class, 'destroy']);

// Rutas para Países
Route::get('/paises', [PaisController::class, 'index']);
Route::get('/paises/{id}', [PaisController::class, 'show']);
Route::post('/paises', [PaisController::class, 'store']);
Route::put('/paises/{id}', [PaisController::class, 'update']);
Route::patch('/paises/{id}', [PaisController::class, 'updatePartial']);
Route::delete('/paises/{id}', [PaisController::class, 'destroy']);

// Rutas para Ciudades
Route::get('/ciudades', [CiudadController::class, 'index']);
Route::get('/ciudades/{id}', [CiudadController::class, 'show']);
Route::post('/ciudades', [CiudadController::class, 'store']);
Route::put('/ciudades/{id}', [CiudadController::class, 'update']);
Route::patch('/ciudades/{id}', [CiudadController::class, 'updatePartial']);
Route::delete('/ciudades/{id}', [CiudadController::class, 'destroy']);

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

// Rutas para Ejercicios
Route::get('/ejercicios', [EjercicioController::class, 'index']);
Route::get('/ejercicios/{id}', [EjercicioController::class, 'show']);
Route::post('/ejercicios', [EjercicioController::class, 'store']);
Route::put('/ejercicios/{id}', [EjercicioController::class, 'update']);
Route::patch('/ejercicios/{id}', [EjercicioController::class, 'updatePartial']);
Route::delete('/ejercicios/{id}', [EjercicioController::class, 'destroy']);

// Rutas para Traslados
Route::get('/traslados', [TrasladoController::class, 'index']);
Route::get('/traslados/{id}', [TrasladoController::class, 'show']);
Route::post('/traslados', [TrasladoController::class, 'store']);
Route::put('/traslados/{id}', [TrasladoController::class, 'update']);
Route::patch('/traslados/{id}', [TrasladoController::class, 'updatePartial']);
Route::delete('/traslados/{id}', [TrasladoController::class, 'destroy']);



/** Rutas para la tabla pivote usuario_dieta **/
Route::get('/usuario-dieta', [UsuarioDietaController::class, 'index']);
Route::get('/usuario-dieta/{id}', [UsuarioDietaController::class, 'show']);
Route::post('/usuario-dieta', [UsuarioDietaController::class, 'store']);
Route::put('/usuario-dieta/{id}', [UsuarioDietaController::class, 'update']);
Route::patch('/usuario-dieta/{id}', [UsuarioDietaController::class, 'updatePartial']);
Route::delete('/usuario-dieta/{id}', [UsuarioDietaController::class, 'destroy']);

/** Rutas para la tabla pivote rutina_ejercicio **/
Route::get('/rutina-ejercicio', [RutinaEjercicioController::class, 'index']);
Route::get('/rutina-ejercicio/{id}', [RutinaEjercicioController::class, 'show']);
Route::post('/rutina-ejercicio', [RutinaEjercicioController::class, 'store']);
Route::put('/rutina-ejercicio/{id}', [RutinaEjercicioController::class, 'update']);
Route::patch('/rutina-ejercicio/{id}', [RutinaEjercicioController::class, 'updatePartial']);
Route::delete('/rutina-ejercicio/{id}', [RutinaEjercicioController::class, 'destroy']);

/** Rutas para la tabla pivote usuario_rutina **/
Route::get('/usuario-rutina', [UsuarioRutinaController::class, 'index']);
Route::get('/usuario-rutina/{id}', [UsuarioRutinaController::class, 'show']);
Route::post('/usuario-rutina', [UsuarioRutinaController::class, 'store']);
Route::put('/usuario-rutina/{id}', [UsuarioRutinaController::class, 'update']);
Route::patch('/usuario-rutina/{id}', [UsuarioRutinaController::class, 'updatePartial']);
Route::delete('/usuario-rutina/{id}', [UsuarioRutinaController::class, 'destroy']);
