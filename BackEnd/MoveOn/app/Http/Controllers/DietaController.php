<?php

namespace App\Http\Controllers;

use App\Models\Dieta;
use App\Http\Requests\StoreDietaRequest;
use App\Http\Requests\UpdateDietaRequest;
use Illuminate\Http\Request;

class DietaController extends Controller
{
    public function index()
    {
        $dietas = Dieta::all();
        if ($dietas->isEmpty()) {
            return response()->json([
                'message' => 'No hay dietas registradas',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'dietas' => $dietas,
            'status' => 200
        ], 200);
    }

    public function store(StoreDietaRequest $request)
    {
        $dieta = Dieta::create($request->validated());
        if (!$dieta) {
            return response()->json([
                'message' => 'Error al crear la dieta',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message' => 'Dieta creada',
            'dieta'   => $dieta,
            'status'  => 201
        ], 201);
    }

    public function show($id)
    {
        $dieta = Dieta::find($id);
        if (!$dieta) {
            return response()->json([
                'message' => 'Dieta no encontrada',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'dieta'  => $dieta,
            'status' => 200
        ], 200);
    }

    public function update(UpdateDietaRequest $request, $id)
    {
        $dieta = Dieta::find($id);
        if (!$dieta) {
            return response()->json([
                'message' => 'Dieta no encontrada',
                'status'  => 404
            ], 404);
        }
        $dieta->update($request->validated());
        return response()->json([
            'message' => 'Dieta actualizada',
            'dieta'   => $dieta,
            'status'  => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $dieta = Dieta::find($id);
        if (!$dieta) {
            return response()->json([
                'message' => 'Dieta no encontrada',
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
        $dieta->update($request->all());
        return response()->json([
            'message' => 'Dieta actualizada parcialmente',
            'dieta'   => $dieta,
            'status'  => 200
        ], 200);
    }

    public function destroy($id)
    {
        $dieta = Dieta::find($id);
        if (!$dieta) {
            return response()->json([
                'message' => 'Dieta no encontrada',
                'status'  => 404
            ], 404);
        }
        $dieta->delete();
        return response()->json([
            'message' => 'Dieta eliminada',
            'status'  => 200
        ], 200);
    }
}
