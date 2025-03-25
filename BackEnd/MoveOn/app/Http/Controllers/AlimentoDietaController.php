<?php

namespace App\Http\Controllers;

use App\Models\AlimentoDieta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AlimentoDietaController extends Controller
{
    public function index()
    {
        $registros = AlimentoDieta::all();
        if ($registros->isEmpty()) {
            return response()->json([
                'message' => 'No hay registros en la relación dieta-alimento',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'alimento_dietas' => $registros,
            'status'          => 200
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_alimento' => 'required|exists:alimento,id_alimento',
            'id_dieta'    => 'required|exists:dieta,id_dieta',
            'cantidad'    => 'required|numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores de validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }

        $registro = AlimentoDieta::create($request->all());
        if (!$registro) {
            return response()->json([
                'message' => 'Error al crear el registro de dieta-alimento',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message'         => 'Registro de dieta-alimento creado',
            'alimento_dieta'  => $registro,
            'status'          => 201
        ], 201);
    }

    public function show($id_alimento, $id_dieta)
    {
        $registro = AlimentoDieta::where('id_alimento', $id_alimento)
            ->where('id_dieta', $id_dieta)
            ->first();

        if (!$registro) {
            return response()->json([
                'message' => 'Registro no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'alimento_dieta' => $registro,
            'status'         => 200
        ], 200);
    }

    public function update(Request $request, $id_alimento, $id_dieta)
    {
        $registro = AlimentoDieta::where('id_alimento', $id_alimento)
            ->where('id_dieta', $id_dieta)
            ->first();

        if (!$registro) {
            return response()->json([
                'message' => 'Registro no encontrado',
                'status'  => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'cantidad' => 'required|numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }

        $registro->update($request->only('cantidad'));
        return response()->json([
            'message'         => 'Registro actualizado',
            'alimento_dieta'  => $registro,
            'status'          => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id_alimento, $id_dieta)
    {
        $registro = AlimentoDieta::where('id_alimento', $id_alimento)
            ->where('id_dieta', $id_dieta)
            ->first();

        if (!$registro) {
            return response()->json([
                'message' => 'Registro no encontrado',
                'status'  => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'cantidad' => 'sometimes|numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }

        $registro->update($request->only('cantidad'));
        return response()->json([
            'message'         => 'Registro actualizado parcialmente',
            'alimento_dieta'  => $registro,
            'status'          => 200
        ], 200);
    }

    public function destroy($id_alimento, $id_dieta)
    {
        $registro = AlimentoDieta::where('id_alimento', $id_alimento)
            ->where('id_dieta', $id_dieta)
            ->first();

        if (!$registro) {
            return response()->json([
                'message' => 'Registro no encontrado',
                'status'  => 404
            ], 404);
        }
        $registro->delete();
        return response()->json([
            'message' => 'Registro eliminado',
            'status'  => 200
        ], 200);
    }
}
