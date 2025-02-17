<?php

namespace App\Http\Controllers;

use App\Models\Ejercicio;
use App\Http\Requests\StoreEjercicioRequest;
use App\Http\Requests\UpdateEjercicioRequest;
use Illuminate\Http\Request;

class EjercicioController extends Controller
{
    public function index()
    {
        $ejercicios = Ejercicio::all();
        if ($ejercicios->isEmpty()) {
            return response()->json([
                'message' => 'No hay ejercicios registrados',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'ejercicios' => $ejercicios,
            'status'     => 200
        ], 200);
    }

    public function store(StoreEjercicioRequest $request)
    {
        $ejercicio = Ejercicio::create($request->validated());
        if (!$ejercicio) {
            return response()->json([
                'message' => 'Error al crear el ejercicio',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message'   => 'Ejercicio creado',
            'ejercicio' => $ejercicio,
            'status'    => 201
        ], 201);
    }

    public function show($id)
    {
        $ejercicio = Ejercicio::find($id);
        if (!$ejercicio) {
            return response()->json([
                'message' => 'Ejercicio no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'ejercicio' => $ejercicio,
            'status'    => 200
        ], 200);
    }

    public function update(UpdateEjercicioRequest $request, $id)
    {
        $ejercicio = Ejercicio::find($id);
        if (!$ejercicio) {
            return response()->json([
                'message' => 'Ejercicio no encontrado',
                'status'  => 404
            ], 404);
        }
        $ejercicio->update($request->validated());
        return response()->json([
            'message'   => 'Ejercicio actualizado',
            'ejercicio' => $ejercicio,
            'status'    => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $ejercicio = Ejercicio::find($id);
        if (!$ejercicio) {
            return response()->json([
                'message' => 'Ejercicio no encontrado',
                'status'  => 404
            ], 404);
        }
        $validator = \Validator::make($request->all(), [
            'nombre'         => 'sometimes|string|max:100',
            'descripcion'    => 'sometimes|nullable|string',
            'imagen_url'     => 'sometimes|nullable|url',
            'video_url'      => 'sometimes|nullable|url',
            'grupo_muscular' => 'sometimes|nullable|string|max:100'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $ejercicio->update($request->all());
        return response()->json([
            'message'   => 'Ejercicio actualizado parcialmente',
            'ejercicio' => $ejercicio,
            'status'    => 200
        ], 200);
    }

    public function destroy($id)
    {
        $ejercicio = Ejercicio::find($id);
        if (!$ejercicio) {
            return response()->json([
                'message' => 'Ejercicio no encontrado',
                'status'  => 404
            ], 404);
        }
        $ejercicio->delete();
        return response()->json([
            'message' => 'Ejercicio eliminado',
            'status'  => 200
        ], 200);
    }
}
