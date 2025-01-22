<?php

namespace App\Http\Controllers;

use App\Models\Rutina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RutinaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rutinas = Rutina::all();

        if ($rutinas->isEmpty()) {
            return response()->json([
                'message' => 'No hay rutinas registradas',
                'status' => 200
            ], 200);
        }

        return response()->json([
            'rutinas' => $rutinas,
            'status' => 200
        ], 200);
    }

    /**
     * Crear una nueva rutina.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:100',
            'detalles' => 'required|array', // Validar que el campo detalles sea un array
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores de validación.',
                'errors' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        // Crear una nueva rutina
        $rutina = Rutina::create([
            'nombre' => $request->nombre,
            'detalles' => $request->detalles, // Laravel se encarga de convertir a JSON
        ]);

        if (!$rutina) {
            return response()->json([
                'message' => 'Error al crear la rutina.',
                'status' => 500
            ], 500);
        }

        return response()->json([
            'message' => 'Rutina creada correctamente.',
            'data' => $rutina,
            'status' => 201
        ], 201);
    }

    public function show($id)
    {
        $rutina = Rutina::find($id);

        if (!$rutina) {
            return response()->json([
                'message' => 'Rutina no encontrada.',
                'status' => 404
            ], 404);
        }

        return response()->json([
            'rutina' => $rutina,
            'status' => 200
        ], 200);
    }

    /**
     * Eliminar una rutina.
     */
    public function destroy($id)
    {
        $rutina = Rutina::find($id);

        if (!$rutina) {
            return response()->json([
                'message' => 'Rutina no encontrada.',
                'status' => 404
            ], 404);
        }

        $rutina->delete();

        return response()->json([
            'message' => 'Rutina eliminada correctamente.',
            'status' => 200
        ], 200);
    }

    /**
     * Actualizar una rutina completamente.
     */
    public function update(Request $request, $id)
    {
        $rutina = Rutina::find($id);

        if (!$rutina) {
            return response()->json([
                'message' => 'Rutina no encontrada.',
                'status' => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:100',
            'detalles' => 'required|array', // Validar que detalles sea un array
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores en la validación de los datos.',
                'errors' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        $rutina->nombre = $request->nombre;
        $rutina->detalles = $request->detalles;

        $rutina->save();

        return response()->json([
            'message' => 'Rutina actualizada correctamente.',
            'rutina' => $rutina,
            'status' => 200
        ], 200);
    }

    /**
     * Actualizar una rutina parcialmente.
     */
    public function updatePartial(Request $request, $id)
    {
        $rutina = Rutina::find($id);

        if (!$rutina) {
            return response()->json([
                'message' => 'Rutina no encontrada.',
                'status' => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'string|max:100',
            'detalles' => 'array', // Validar que detalles sea un array
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores en la validación de los datos.',
                'errors' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        // Actualizar únicamente los campos enviados en el request
        if ($request->has('nombre')) {
            $rutina->nombre = $request->nombre;
        }
        if ($request->has('detalles')) {
            $rutina->detalles = $request->detalles;
        }

        $rutina->save();

        return response()->json([
            'message' => 'Rutina actualizada parcialmente.',
            'rutina' => $rutina,
            'status' => 200
        ], 200);
    }
}
