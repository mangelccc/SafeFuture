<?php

namespace App\Http\Controllers;

use App\Models\UsuarioDieta;
use Illuminate\Http\Request;
use App\Http\Requests\StoreUsuarioDietaRequest;
use App\Http\Requests\UpdateUsuarioDietaRequest;

class UsuarioDietaController extends Controller
{
    public function index()
    {
        $usuarioDietas = UsuarioDieta::all();
        if ($usuarioDietas->isEmpty()) {
            return response()->json([
                'message' => 'No hay registros en usuario_dieta',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'usuario_dietas' => $usuarioDietas,
            'status'         => 200
        ], 200);
    }

    public function store(StoreUsuarioDietaRequest $request)
    {
        $usuarioDieta = UsuarioDieta::create($request->validated());
        if (!$usuarioDieta) {
            return response()->json([
                'message' => 'Error al crear el registro de usuario_dieta',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message'       => 'Registro de usuario_dieta creado',
            'usuario_dieta' => $usuarioDieta,
            'status'        => 201
        ], 201);
    }

    public function show($id)
    {
        $usuarioDieta = UsuarioDieta::find($id);
        if (!$usuarioDieta) {
            return response()->json([
                'message' => 'Registro de usuario_dieta no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'usuario_dieta' => $usuarioDieta,
            'status'        => 200
        ], 200);
    }

    public function update(UpdateUsuarioDietaRequest $request, $id)
    {
        $usuarioDieta = UsuarioDieta::find($id);
        if (!$usuarioDieta) {
            return response()->json([
                'message' => 'Registro de usuario_dieta no encontrado',
                'status'  => 404
            ], 404);
        }
        $usuarioDieta->update($request->validated());
        return response()->json([
            'message'       => 'Registro de usuario_dieta actualizado',
            'usuario_dieta' => $usuarioDieta,
            'status'        => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $usuarioDieta = UsuarioDieta::find($id);
        if (!$usuarioDieta) {
            return response()->json([
                'message' => 'Registro de usuario_dieta no encontrado',
                'status'  => 404
            ], 404);
        }
        $validator = \Validator::make($request->all(), [
            'id_usuario'       => 'sometimes|exists:usuario,id_usuario',
            'id_dieta'         => 'sometimes|exists:dieta,id_dieta',
            'peso_usuario'     => 'sometimes|numeric',
            'altura_usuario'   => 'sometimes|numeric',
            'actividad_fisica' => 'sometimes|in:Sedentario,Ligero,Moderado,Activo,Muy-activo',
            'objetivo'         => 'sometimes|in:Perder,Mantener,Ganar',
            'estado'           => 'sometimes|in:Activa,Finalizada'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $usuarioDieta->update($request->all());
        return response()->json([
            'message'       => 'Registro de usuario_dieta actualizado parcialmente',
            'usuario_dieta' => $usuarioDieta,
            'status'        => 200
        ], 200);
    }

    public function destroy($id)
    {
        $usuarioDieta = UsuarioDieta::find($id);
        if (!$usuarioDieta) {
            return response()->json([
                'message' => 'Registro de usuario_dieta no encontrado',
                'status'  => 404
            ], 404);
        }
        $usuarioDieta->delete();
        return response()->json([
            'message' => 'Registro de usuario_dieta eliminado',
            'status'  => 200
        ], 200);
    }
}
