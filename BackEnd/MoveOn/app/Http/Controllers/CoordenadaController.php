<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCoordenadaRequest;
use App\Http\Requests\UpdateCoordenadaRequest;
use App\Models\Coordenada;
use Illuminate\Http\Request;

class CoordenadaController extends Controller
{
    public function index()
    {
        $coords = Coordenada::all();
        if ($coords->isEmpty()) {
            return response()->json([
                'message' => 'No hay coordenadas registradas',
                'status'  => 200,
            ], 200);
        }

        return response()->json([
            'coordenadas' => $coords,
            'status'      => 200,
        ], 200);
    }

    public function store(StoreCoordenadaRequest $request)
    {
        $coord = Coordenada::create($request->validated());
        if (!$coord) {
            return response()->json([
                'message' => 'Error al crear la coordenada',
                'status'  => 500,
            ], 500);
        }

        return response()->json([
            'message'    => 'Coordenada creada',
            'coordenada' => $coord,
            'status'     => 201,
        ], 201);
    }

    public function show($id)
    {
        $coord = Coordenada::find($id);
        if (!$coord) {
            return response()->json([
                'message' => 'Coordenada no encontrada',
                'status'  => 404,
            ], 404);
        }

        return response()->json([
            'coordenada' => $coord,
            'status'     => 200,
        ], 200);
    }

    public function update(UpdateCoordenadaRequest $request, $id)
    {
        $coord = Coordenada::find($id);
        if (!$coord) {
            return response()->json([
                'message' => 'Coordenada no encontrada',
                'status'  => 404,
            ], 404);
        }

        $coord->update($request->validated());

        return response()->json([
            'message'    => 'Coordenada actualizada',
            'coordenada' => $coord,
            'status'     => 200,
        ], 200);
    }

    public function destroy($id)
    {
        $coord = Coordenada::find($id);
        if (!$coord) {
            return response()->json([
                'message' => 'Coordenada no encontrada',
                'status'  => 404,
            ], 404);
        }

        $coord->delete();

        return response()->json([
            'message' => 'Coordenada eliminada',
            'status'  => 200,
        ], 200);
    }
}
