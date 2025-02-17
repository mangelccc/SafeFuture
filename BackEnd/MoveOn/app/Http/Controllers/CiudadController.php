<?php

namespace App\Http\Controllers;

use App\Models\Ciudad;
use App\Http\Requests\StoreCiudadRequest;
use App\Http\Requests\UpdateCiudadRequest;
use Illuminate\Http\Request;

class CiudadController extends Controller
{
    public function index()
    {
        $ciudades = Ciudad::all();
        if ($ciudades->isEmpty()) {
            return response()->json([
                'message' => 'No hay ciudades registradas',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'ciudades' => $ciudades,
            'status'   => 200
        ], 200);
    }

    public function store(StoreCiudadRequest $request)
    {
        $ciudad = Ciudad::create($request->validated());
        if (!$ciudad) {
            return response()->json([
                'message' => 'Error al crear la ciudad',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message' => 'Ciudad creada',
            'ciudad'  => $ciudad,
            'status'  => 201
        ], 201);
    }

    public function show($id)
    {
        $ciudad = Ciudad::find($id);
        if (!$ciudad) {
            return response()->json([
                'message' => 'Ciudad no encontrada',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'ciudad' => $ciudad,
            'status' => 200
        ], 200);
    }

    public function update(UpdateCiudadRequest $request, $id)
    {
        $ciudad = Ciudad::find($id);
        if (!$ciudad) {
            return response()->json([
                'message' => 'Ciudad no encontrada',
                'status'  => 404
            ], 404);
        }
        $ciudad->update($request->validated());
        return response()->json([
            'message' => 'Ciudad actualizada',
            'ciudad'  => $ciudad,
            'status'  => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $ciudad = Ciudad::find($id);
        if (!$ciudad) {
            return response()->json([
                'message' => 'Ciudad no encontrada',
                'status'  => 404
            ], 404);
        }
        $validator = \Validator::make($request->all(), [
            'nombre'   => 'sometimes|string|max:100',
            'cod_pais' => 'sometimes|exists:pais,cod_pais'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $ciudad->update($request->all());
        return response()->json([
            'message' => 'Ciudad actualizada parcialmente',
            'ciudad'  => $ciudad,
            'status'  => 200
        ], 200);
    }

    public function destroy($id)
    {
        $ciudad = Ciudad::find($id);
        if (!$ciudad) {
            return response()->json([
                'message' => 'Ciudad no encontrada',
                'status'  => 404
            ], 404);
        }
        $ciudad->delete();
        return response()->json([
            'message' => 'Ciudad eliminada',
            'status'  => 200
        ], 200);
    }
}
