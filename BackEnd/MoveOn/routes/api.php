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
use App\Http\Controllers\AlimentoDietaController;
use App\Http\Controllers\NoFumarController;
use App\Http\Controllers\CoordenadaController;
use App\Http\Controllers\AuthController;


// ----------  Rutas públicas  ---------- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Rutas de usuarios
Route::get('usuarios/email-exists', [UsuarioController::class, 'emailExists']);
Route::post('/usuarios', [UsuarioController::class, 'store']);          // registro
Route::post('/login',    [UsuarioController::class, 'login'])->name('login'); // <-- nombre
Route::patch('/reset-password/{id}', [UsuarioController::class, 'resetPasswordWithToken']);

// Rutas para Países
Route::get('/paises', [PaisController::class, 'index']);
Route::get('/paises/{id}', [PaisController::class, 'show']);
Route::post('/paises', [PaisController::class, 'store']);


// Rutas para Ciudades
Route::get('/ciudades', [CiudadController::class, 'index']);
Route::get('/ciudades/{id}', [CiudadController::class, 'show']);

// Rutas para Traslados
Route::get('/traslados', [TrasladoController::class, 'index']);
Route::get('/traslados/{id}', [TrasladoController::class, 'show']);

// Redirecciono si no tiene permisos:
Route::get('/login', fn () => response()->json(['message' => 'No autorizado'], 401))
      ->name('login');

// ----------  Rutas protegidas  ---------- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Route::middleware('auth:sanctum')->group(function () {
    Route::get   ('/usuarios',       [UsuarioController::class, 'index']);
    Route::get   ('/usuarios/{id}',  [UsuarioController::class, 'show']);
    Route::put   ('/usuarios/{id}',  [UsuarioController::class, 'update']);
    Route::patch ('/usuarios/{id}',  [UsuarioController::class, 'updatePartial']);
    Route::delete('/usuarios/{id}',  [UsuarioController::class, 'destroy']);


// Rutas para el historial NoFumar
Route::get('/no-fumar', [NoFumarController::class, 'index']);
Route::get('/no-fumar/{id}', [NoFumarController::class, 'show']);
Route::post('/no-fumar', [NoFumarController::class, 'store']);
Route::put('/no-fumar/{id}', [NoFumarController::class, 'update']);
Route::patch('/no-fumar/{id}', [NoFumarController::class, 'update']);
Route::delete('/no-fumar/{id}', [NoFumarController::class, 'destroy']);
Route::get('/usuario/{id_usuario}/no-fumar', [NoFumarController::class, 'getByUsuario']);

// Rutas para Alimentos
Route::get('/alimentos', [AlimentoController::class, 'index']);
Route::get('/alimentos/{id}', [AlimentoController::class, 'show']);
Route::post('/alimentos', [AlimentoController::class, 'store']);
Route::put('/alimentos/{id}', [AlimentoController::class, 'update']);
Route::patch('/alimentos/{id}', [AlimentoController::class, 'updatePartial']);
Route::delete('/alimentos/{id}', [AlimentoController::class, 'destroy']);

// Rutas para Rutinas
Route::get('/rutinas', [RutinaController::class, 'index']);
Route::get('/rutinas/{id}', [RutinaController::class, 'show']);
Route::get('/rutinas/uuid/{uuid}', [RutinaController::class, 'getRutinaPorUuid']);
Route::post('/rutinas', [RutinaController::class, 'store']);
Route::put('/rutinas/{id}', [RutinaController::class, 'update']);
Route::patch('/rutinas/{id}', [RutinaController::class, 'updatePartial']);
Route::delete('/rutinas/{id}', [RutinaController::class, 'destroy']);

// Rutas para Dietas
Route::get('/dietas', [DietaController::class, 'index']);
Route::get('/dietas/{id}', [DietaController::class, 'show']);
Route::get('/dietas/{id_dieta}/alimentos', [AlimentoDietaController::class, 'getByDieta']);
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

/** Rutas para la tabla pivote usuario_dieta **/
Route::get('/usuario-dieta', [UsuarioDietaController::class, 'index']);
Route::get('/usuario-dieta/{id}', [UsuarioDietaController::class, 'show']);
Route::get('/usuario-dieta/{id_user}', [UsuarioDietaController::class, 'getDietasPorUsuario']);
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


/** Rutas para la tabla intermedia dieta_alimento **/
Route::prefix('alimento-dieta')->group(function () {
    Route::get('/', [AlimentoDietaController::class, 'index']);
    Route::post('/', [AlimentoDietaController::class, 'store']);
    // Ruta para obtener todos los alimentos de una dieta.
    Route::get('/{id_dieta}', [AlimentoDietaController::class, 'getByDieta']);
    // Ruta para permitir multiples inserciones a dieta_alimento.
    Route::put('/multiples', [AlimentoDietaController::class, 'updateMultiples']);
    Route::get('/{id_alimento}/{id_dieta}', [AlimentoDietaController::class, 'show']);
    Route::put('/{id_alimento}/{id_dieta}', [AlimentoDietaController::class, 'update']);
    Route::patch('/{id_alimento}/{id_dieta}', [AlimentoDietaController::class, 'updatePartial']);
    Route::delete('/{id_alimento}/{id_dieta}', [AlimentoDietaController::class, 'destroy']);
});

// Ruta para permitir a un usuario crear/obtener sus dieta personalizada.
Route::post('/usuario/{id_usuario}/dieta', [UsuarioDietaController::class, 'createDieta']);
Route::get('/usuario/{id_usuario}/dietas', [UsuarioController::class, 'getDietasPorUsuario']);

// Rutas para Coordenadas
Route::get   ('/coordenadas',          [CoordenadaController::class, 'index']);
Route::get   ('/coordenadas/{id}',     [CoordenadaController::class, 'show']);
Route::post  ('/coordenadas',          [CoordenadaController::class, 'store']);
Route::put   ('/coordenadas/{id}',     [CoordenadaController::class, 'update']);
Route::patch ('/coordenadas/{id}',     [CoordenadaController::class, 'update']);
Route::delete('/coordenadas/{id}',     [CoordenadaController::class, 'destroy']);

// Rutas para Países
Route::put('/paises/{id}', [PaisController::class, 'update']);
Route::patch('/paises/{id}', [PaisController::class, 'updatePartial']);
Route::delete('/paises/{id}', [PaisController::class, 'destroy']);

// Rutas para Ciudades
Route::post('/ciudades', [CiudadController::class, 'store']);
Route::put('/ciudades/{id}', [CiudadController::class, 'update']);
Route::patch('/ciudades/{id}', [CiudadController::class, 'updatePartial']);
Route::delete('/ciudades/{id}', [CiudadController::class, 'destroy']);

// Rutas para Traslados
Route::post('/traslados', [TrasladoController::class, 'store']);
Route::put('/traslados/{id}', [TrasladoController::class, 'update']);
Route::patch('/traslados/{id}', [TrasladoController::class, 'updatePartial']);
Route::delete('/traslados/{id}', [TrasladoController::class, 'destroy']);

});




