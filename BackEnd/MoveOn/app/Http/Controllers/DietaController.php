<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Dieta;

class DietaController extends Controller
{
    public function index()
    {
        $dietas = Dieta::all();

        if ($dietas->isEmpty()) {
            return response()->json([
                'message' => 'No hay dietas registradas.',
                'status' => 200
            ], 200);
        }

        return response()->json([
            'dietas' => $dietas,
            'status' => 200
        ], 200);
    }

    /**
     * Mostrar una dieta específica.
     */
    public function show($id)
    {
        $dieta = Dieta::find($id);

        if (!$dieta) {
            return response()->json([
                'message' => 'Dieta no encontrada.',
                'status' => 404
            ], 404);
        }

        return response()->json([
            'dieta' => $dieta,
            'status' => 200
        ], 200);
    }

    /**
     * Crear una nueva dieta.
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

        // Crear una nueva dieta
        $dieta = Dieta::create([
            'nombre' => $request->nombre,
            'detalles' => $request->detalles, // Laravel lo guarda como JSON automáticamente
        ]);

        return response()->json([
            'message' => 'Dieta creada correctamente.',
            'dieta' => $dieta,
            'status' => 201
        ], 201);
    }

    /**
     * Actualizar completamente una dieta.
     */
    public function update(Request $request, $id)
    {
        $dieta = Dieta::find($id);

        if (!$dieta) {
            return response()->json([
                'message' => 'Dieta no encontrada.',
                'status' => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:100',
            'detalles' => 'required|array', // Validar que detalles sea un array
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores de validación.',
                'errors' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        $dieta->nombre = $request->nombre;
        $dieta->detalles = $request->detalles;

        $dieta->save();

        return response()->json([
            'message' => 'Dieta actualizada correctamente.',
            'dieta' => $dieta,
            'status' => 200
        ], 200);
    }

    /**
     * Actualizar parcialmente una dieta.
     */
    public function updatePartial(Request $request, $id)
    {
        $dieta = Dieta::find($id);

        if (!$dieta) {
            return response()->json([
                'message' => 'Dieta no encontrada.',
                'status' => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'string|max:100',
            'detalles' => 'array', // Validar que detalles sea un array
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores de validación.',
                'errors' => $validator->errors(),
                'status' => 400
            ], 400);
        }

        // Actualizar únicamente los campos enviados en el request
        if ($request->has('nombre')) {
            $dieta->nombre = $request->nombre;
        }
        if ($request->has('detalles')) {
            $dieta->detalles = $request->detalles;
        }

        $dieta->save();

        return response()->json([
            'message' => 'Dieta actualizada parcialmente.',
            'dieta' => $dieta,
            'status' => 200
        ], 200);
    }

    /**
     * Eliminar una dieta.
     */
    public function destroy($id)
    {
        $dieta = Dieta::find($id);

        if (!$dieta) {
            return response()->json([
                'message' => 'Dieta no encontrada.',
                'status' => 404
            ], 404);
        }

        $dieta->delete();

        return response()->json([
            'message' => 'Dieta eliminada correctamente.',
            'status' => 200
        ], 200);
    }
}
