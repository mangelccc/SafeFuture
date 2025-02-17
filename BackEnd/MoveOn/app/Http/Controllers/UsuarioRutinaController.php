<?php

namespace App\Http\Controllers;

use App\Models\UsuarioRutina;
use Illuminate\Http\Request;
use App\Http\Requests\StoreUsuarioRutinaRequest;
use App\Http\Requests\UpdateUsuarioRutinaRequest;

class UsuarioRutinaController extends Controller
{
    public function index()
    {
        $usuarioRutinas = UsuarioRutina::all();
        if ($usuarioRutinas->isEmpty()) {
            return response()->json([
                'message' => 'No hay registros en usuario_rutina',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'usuario_rutinas' => $usuarioRutinas,
            'status'          => 200
        ], 200);
    }

    public function store(StoreUsuarioRutinaRequest $request)
    {
        $usuarioRutina = UsuarioRutina::create($request->validated());
        if (!$usuarioRutina) {
            return response()->json([
                'message' => 'Error al crear el registro de usuario_rutina',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message'        => 'Registro de usuario_rutina creado',
            'usuario_rutina' => $usuarioRutina,
            'status'         => 201
        ], 201);
    }

    public function show($id)
    {
        $usuarioRutina = UsuarioRutina::find($id);
        if (!$usuarioRutina) {
            return response()->json([
                'message' => 'Registro de usuario_rutina no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'usuario_rutina' => $usuarioRutina,
            'status'         => 200
        ], 200);
    }

    public function update(UpdateUsuarioRutinaRequest $request, $id)
    {
        $usuarioRutina = UsuarioRutina::find($id);
        if (!$usuarioRutina) {
            return response()->json([
                'message' => 'Registro de usuario_rutina no encontrado',
                'status'  => 404
            ], 404);
        }
        $usuarioRutina->update($request->validated());
        return response()->json([
            'message'        => 'Registro de usuario_rutina actualizado',
            'usuario_rutina' => $usuarioRutina,
            'status'         => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $usuarioRutina = UsuarioRutina::find($id);
        if (!$usuarioRutina) {
            return response()->json([
                'message' => 'Registro de usuario_rutina no encontrado',
                'status'  => 404
            ], 404);
        }
        $validator = \Validator::make($request->all(), [
            'id_usuario'  => 'sometimes|exists:usuario,id_usuario',
            'id_rutina'   => 'sometimes|exists:rutina,id_rutina',
            'fecha_inicio'=> 'sometimes|date',
            'fecha_fin'   => 'sometimes|date|nullable'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $usuarioRutina->update($request->all());
        return response()->json([
            'message'        => 'Registro de usuario_rutina actualizado parcialmente',
            'usuario_rutina' => $usuarioRutina,
            'status'         => 200
        ], 200);
    }

    public function destroy($id)
    {
        $usuarioRutina = UsuarioRutina::find($id);
        if (!$usuarioRutina) {
            return response()->json([
                'message' => 'Registro de usuario_rutina no encontrado',
                'status'  => 404
            ], 404);
        }
        $usuarioRutina->delete();
        return response()->json([
            'message' => 'Registro de usuario_rutina eliminado',
            'status'  => 200
        ], 200);
    }
}
