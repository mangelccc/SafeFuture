<?php

namespace App\Http\Controllers;

use App\Models\Rutina;
use App\Http\Requests\StoreRutinaRequest;
use App\Http\Requests\UpdateRutinaRequest;
use Illuminate\Http\Request;

class RutinaController extends Controller
{
    public function index()
    {
        $rutinas = Rutina::all();
        if ($rutinas->isEmpty()) {
            return response()->json([
                'message' => 'No hay rutinas registradas',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'rutinas' => $rutinas,
            'status'  => 200
        ], 200);
    }

    public function store(StoreRutinaRequest $request)
    {
        $rutina = Rutina::create($request->validated());
        if (!$rutina) {
            return response()->json([
                'message' => 'Error al crear la rutina',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message' => 'Rutina creada',
            'rutina'  => $rutina,
            'status'  => 201
        ], 201);
    }

    public function show($id)
    {
        $rutina = Rutina::find($id);
        if (!$rutina) {
            return response()->json([
                'message' => 'Rutina no encontrada',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'rutina' => $rutina,
            'status' => 200
        ], 200);
    }

    public function update(UpdateRutinaRequest $request, $id)
    {
        $rutina = Rutina::find($id);
        if (!$rutina) {
            return response()->json([
                'message' => 'Rutina no encontrada',
                'status'  => 404
            ], 404);
        }
        $rutina->update($request->validated());
        return response()->json([
            'message' => 'Rutina actualizada',
            'rutina'  => $rutina,
            'status'  => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $rutina = Rutina::find($id);
        if (!$rutina) {
            return response()->json([
                'message' => 'Rutina no encontrada',
                'status'  => 404
            ], 404);
        }
        $validator = \Validator::make($request->all(), [
            'nombre'      => 'sometimes|string|max:100',
            'descripcion' => 'sometimes|nullable|string'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $rutina->update($request->all());
        return response()->json([
            'message' => 'Rutina actualizada parcialmente',
            'rutina'  => $rutina,
            'status'  => 200
        ], 200);
    }

    public function destroy($id)
    {
        $rutina = Rutina::find($id);
        if (!$rutina) {
            return response()->json([
                'message' => 'Rutina no encontrada',
                'status'  => 404
            ], 404);
        }
        $rutina->delete();
        return response()->json([
            'message' => 'Rutina eliminada',
            'status'  => 200
        ], 200);
    }
}
