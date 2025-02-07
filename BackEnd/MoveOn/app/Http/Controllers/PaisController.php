<?php

namespace App\Http\Controllers;

use App\Models\Pais;
use App\Http\Requests\StorePaisRequest;
use App\Http\Requests\UpdatePaisRequest;
use Illuminate\Http\Request;

class PaisController extends Controller
{
    public function index()
    {
        $paises = Pais::all();
        if ($paises->isEmpty()) {
            return response()->json([
                'message' => 'No hay países registrados',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'paises' => $paises,
            'status' => 200
        ], 200);
    }

    public function store(StorePaisRequest $request)
    {
        $pais = Pais::create($request->validated());
        if (!$pais) {
            return response()->json([
                'message' => 'Error al crear el país',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message' => 'País creado',
            'pais'    => $pais,
            'status'  => 201
        ], 201);
    }

    public function show($id)
    {
        $pais = Pais::find($id);
        if (!$pais) {
            return response()->json([
                'message' => 'País no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'pais'   => $pais,
            'status' => 200
        ], 200);
    }

    public function update(UpdatePaisRequest $request, $id)
    {
        $pais = Pais::find($id);
        if (!$pais) {
            return response()->json([
                'message' => 'País no encontrado',
                'status'  => 404
            ], 404);
        }
        $pais->update($request->validated());
        return response()->json([
            'message' => 'País actualizado',
            'pais'    => $pais,
            'status'  => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $pais = Pais::find($id);
        if (!$pais) {
            return response()->json([
                'message' => 'País no encontrado',
                'status'  => 404
            ], 404);
        }
        $validator = \Validator::make($request->all(), [
            'nombre' => 'sometimes|string|max:100'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $pais->update($request->all());
        return response()->json([
            'message' => 'País actualizado parcialmente',
            'pais'    => $pais,
            'status'  => 200
        ], 200);
    }

    public function destroy($id)
    {
        $pais = Pais::find($id);
        if (!$pais) {
            return response()->json([
                'message' => 'País no encontrado',
                'status'  => 404
            ], 404);
        }
        $pais->delete();
        return response()->json([
            'message' => 'País eliminado',
            'status'  => 200
        ], 200);
    }
}
