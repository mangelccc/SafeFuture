<?php

namespace App\Http\Controllers;

use App\Models\Alimento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AlimentoController extends Controller
{
    public function index()
    {
        $alimentos = Alimento::all();
        if ($alimentos->isEmpty()) {
            return response()->json([
                'message' => 'No hay alimentos registrados',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'alimentos' => $alimentos,
            'status'    => 200
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre'         => 'required|string|max:100',
            'categoria'      => 'required|in:Proteínas,Carbohidratos,Grasas,Vitaminas',
            'imagen_url'     => 'nullable|url',
            'descripcion'    => 'nullable|string',
            'peso_kg'        => 'nullable|numeric',
            'precio_euros'   => 'nullable|numeric',
            'codigo_barras'  => 'nullable|string|max:50',
            'calorias'       => 'nullable|numeric',
            'proteinas'      => 'nullable|numeric',
            'grasas'         => 'nullable|numeric',
            'carbohidratos'  => 'nullable|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores de validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }

        $alimento = Alimento::create($request->all());
        if (!$alimento) {
            return response()->json([
                'message' => 'Error al crear el alimento',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message' => 'Alimento creado',
            'alimento' => $alimento,
            'status'  => 201
        ], 201);
    }

    public function show($id)
    {
        $alimento = Alimento::find($id);
        if (!$alimento) {
            return response()->json([
                'message' => 'Alimento no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'alimento' => $alimento,
            'status'   => 200
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $alimento = Alimento::find($id);
        if (!$alimento) {
            return response()->json([
                'message' => 'Alimento no encontrado',
                'status'  => 404
            ], 404);
        }
        $validator = Validator::make($request->all(), [
            'nombre'         => 'required|string|max:100',
            'categoria'      => 'required|in:Proteínas,Carbohidratos,Grasas,Vitaminas',
            'imagen_url'     => 'nullable|url',
            'descripcion'    => 'nullable|string',
            'peso_kg'        => 'nullable|numeric',
            'precio_euros'   => 'nullable|numeric',
            'codigo_barras'  => 'nullable|string|max:50',
            'calorias'       => 'nullable|numeric',
            'proteinas'      => 'nullable|numeric',
            'grasas'         => 'nullable|numeric',
            'carbohidratos'  => 'nullable|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $alimento->update($request->all());
        return response()->json([
            'message' => 'Alimento actualizado',
            'alimento' => $alimento,
            'status'  => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $alimento = Alimento::find($id);
        if (!$alimento) {
            return response()->json([
                'message' => 'Alimento no encontrado',
                'status'  => 404
            ], 404);
        }
        $validator = Validator::make($request->all(), [
            'nombre'         => 'sometimes|string|max:100',
            'categoria'      => 'sometimes|in:Proteínas,Carbohidratos,Grasas,Vitaminas',
            'imagen_url'     => 'sometimes|nullable|url',
            'descripcion'    => 'sometimes|nullable|string',
            'peso_kg'        => 'sometimes|nullable|numeric',
            'precio_euros'   => 'sometimes|nullable|numeric',
            'codigo_barras'  => 'sometimes|nullable|string|max:50',
            'calorias'       => 'sometimes|nullable|numeric',
            'proteinas'      => 'sometimes|nullable|numeric',
            'grasas'         => 'sometimes|nullable|numeric',
            'carbohidratos'  => 'sometimes|nullable|numeric'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $alimento->update($request->all());
        return response()->json([
            'message' => 'Alimento actualizado parcialmente',
            'alimento' => $alimento,
            'status'  => 200
        ], 200);
    }

    public function destroy($id)
    {
        $alimento = Alimento::find($id);
        if (!$alimento) {
            return response()->json([
                'message' => 'Alimento no encontrado',
                'status'  => 404
            ], 404);
        }
        $alimento->delete();
        return response()->json([
            'message' => 'Alimento eliminado',
            'status'  => 200
        ], 200);
    }
}
