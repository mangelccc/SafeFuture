<?php

namespace App\Http\Controllers;

use App\Models\Traslado;
use App\Http\Requests\StoreTrasladoRequest;
use App\Http\Requests\UpdateTrasladoRequest;
use Illuminate\Http\Request;

class TrasladoController extends Controller
{
    public function index()
    {
        $traslados = Traslado::all();
        if ($traslados->isEmpty()) {
            return response()->json([
                'message' => 'No hay traslados registrados',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'traslados' => $traslados,
            'status'    => 200
        ], 200);
    }

    public function store(StoreTrasladoRequest $request)
    {
        $traslado = Traslado::create($request->validated());
        if (!$traslado) {
            return response()->json([
                'message' => 'Error al crear el traslado',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message'  => 'Traslado creado',
            'traslado' => $traslado,
            'status'   => 201
        ], 201);
    }

    public function show($id)
    {
        $traslado = Traslado::find($id);
        if (!$traslado) {
            return response()->json([
                'message' => 'Traslado no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'traslado' => $traslado,
            'status'   => 200
        ], 200);
    }

    public function update(UpdateTrasladoRequest $request, $id)
    {
        $traslado = Traslado::find($id);
        if (!$traslado) {
            return response()->json([
                'message' => 'Traslado no encontrado',
                'status'  => 404
            ], 404);
        }
        $traslado->update($request->validated());
        return response()->json([
            'message'  => 'Traslado actualizado',
            'traslado' => $traslado,
            'status'   => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $traslado = Traslado::find($id);
        if (!$traslado) {
            return response()->json([
                'message' => 'Traslado no encontrado',
                'status'  => 404
            ], 404);
        }
        $validator = \Validator::make($request->all(), [
            'id_usuario'         => 'sometimes|exists:usuario,id_usuario',
            'cod_ciudad_origen'  => 'sometimes|exists:ciudad,cod_ciudad',
            'cod_ciudad_destino' => 'sometimes|exists:ciudad,cod_ciudad',
            'fecha_solicitud'    => 'sometimes|date'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $traslado->update($request->all());
        return response()->json([
            'message'  => 'Traslado actualizado parcialmente',
            'traslado' => $traslado,
            'status'   => 200
        ], 200);
    }

    public function destroy($id)
    {
        $traslado = Traslado::find($id);
        if (!$traslado) {
            return response()->json([
                'message' => 'Traslado no encontrado',
                'status'  => 404
            ], 404);
        }
        $traslado->delete();
        return response()->json([
            'message' => 'Traslado eliminado',
            'status'  => 200
        ], 200);
    }
}
