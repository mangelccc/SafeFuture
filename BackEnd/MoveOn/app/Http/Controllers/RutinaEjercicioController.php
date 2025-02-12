<?php

namespace App\Http\Controllers;

use App\Models\RutinaEjercicio;
use Illuminate\Http\Request;
use App\Http\Requests\StoreRutinaEjercicioRequest;
use App\Http\Requests\UpdateRutinaEjercicioRequest;

class RutinaEjercicioController extends Controller
{
    public function index()
    {
        $rutinaEjercicios = RutinaEjercicio::all();
        if ($rutinaEjercicios->isEmpty()) {
            return response()->json([
                'message' => 'No hay registros en rutina_ejercicio',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'rutina_ejercicios' => $rutinaEjercicios,
            'status'            => 200
        ], 200);
    }

    public function store(StoreRutinaEjercicioRequest $request)
    {
        $rutinaEjercicio = RutinaEjercicio::create($request->validated());
        if (!$rutinaEjercicio) {
            return response()->json([
                'message' => 'Error al crear el registro de rutina_ejercicio',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message'          => 'Registro de rutina_ejercicio creado',
            'rutina_ejercicio' => $rutinaEjercicio,
            'status'           => 201
        ], 201);
    }

    public function show($id)
    {
        $rutinaEjercicio = RutinaEjercicio::find($id);
        if (!$rutinaEjercicio) {
            return response()->json([
                'message' => 'Registro de rutina_ejercicio no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'rutina_ejercicio' => $rutinaEjercicio,
            'status'           => 200
        ], 200);
    }

    public function update(UpdateRutinaEjercicioRequest $request, $id)
    {
        $rutinaEjercicio = RutinaEjercicio::find($id);
        if (!$rutinaEjercicio) {
            return response()->json([
                'message' => 'Registro de rutina_ejercicio no encontrado',
                'status'  => 404
            ], 404);
        }
        $rutinaEjercicio->update($request->validated());
        return response()->json([
            'message'          => 'Registro de rutina_ejercicio actualizado',
            'rutina_ejercicio' => $rutinaEjercicio,
            'status'           => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $rutinaEjercicio = RutinaEjercicio::find($id);
        if (!$rutinaEjercicio) {
            return response()->json([
                'message' => 'Registro de rutina_ejercicio no encontrado',
                'status'  => 404
            ], 404);
        }
        $validator = \Validator::make($request->all(), [
            'id_rutina'         => 'sometimes|exists:rutina,id_rutina',
            'id_ejercicio'      => 'sometimes|exists:ejercicio,id_ejercicio',
            'num_series'        => 'sometimes|integer',
            'num_repeticiones'  => 'sometimes|integer',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $rutinaEjercicio->update($request->all());
        return response()->json([
            'message'          => 'Registro de rutina_ejercicio actualizado parcialmente',
            'rutina_ejercicio' => $rutinaEjercicio,
            'status'           => 200
        ], 200);
    }

    public function destroy($id)
    {
        $rutinaEjercicio = RutinaEjercicio::find($id);
        if (!$rutinaEjercicio) {
            return response()->json([
                'message' => 'Registro de rutina_ejercicio no encontrado',
                'status'  => 404
            ], 404);
        }
        $rutinaEjercicio->delete();
        return response()->json([
            'message' => 'Registro de rutina_ejercicio eliminado',
            'status'  => 200
        ], 200);
    }
}
