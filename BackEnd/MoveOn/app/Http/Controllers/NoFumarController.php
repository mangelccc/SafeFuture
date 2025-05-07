<?php

namespace App\Http\Controllers;

use App\Models\NoFumar;
use App\Http\Requests\StoreNoFumarRequest;
use App\Http\Requests\UpdateNoFumarRequest;
use Illuminate\Http\Request;

class NoFumarController extends Controller
{
    public function index()
    {
        $records = NoFumar::all();
        return response()->json(['no_fumar' => $records, 'status' => 200], 200);
    }

    public function show($id)
    {
        $record = NoFumar::find($id);
        if (!$record) {
            return response()->json(['message' => 'Registro no encontrado', 'status' => 404], 404);
        }
        return response()->json(['no_fumar' => $record, 'status' => 200], 200);
    }

    public function store(StoreNoFumarRequest $request)
    {
        $data = $request->validated();

        // 🚫 Prevenir múltiples intentos activos
        $existeActivo = NoFumar::where('id_usuario', $data['id_usuario'])
            ->where('status', 'activo')
            ->exists();

        if ($existeActivo) {
            return response()->json([
                'message' => 'Ya tienes un intento activo en curso',
                'status' => 409
            ], 409);
        }

        // ✅ Crear nuevo intento
        $record = NoFumar::create($data);

        return response()->json([
            'message' => 'Intento registrado con éxito',
            'no_fumar' => $record,
            'status' => 201
        ], 201);
    }


    public function update(UpdateNoFumarRequest $request, $id)
    {
        $record = NoFumar::find($id);
        if (!$record) {
            return response()->json(['message' => 'Registro no encontrado', 'status' => 404], 404);
        }
        $record->update($request->validated());
        return response()->json(['message' => 'Registro actualizado', 'no_fumar' => $record, 'status' => 200], 200);
    }

    public function destroy($id)
    {
        $record = NoFumar::find($id);
        if (!$record) {
            return response()->json(['message' => 'Registro no encontrado', 'status' => 404], 404);
        }
        $record->delete();
        return response()->json(['message' => 'Registro eliminado', 'status' => 200], 200);
    }

    public function getByUsuario($id_usuario)
    {
        $records = NoFumar::where('id_usuario', $id_usuario)->get();
        return response()->json(['no_fumar' => $records, 'status' => 200], 200);
    }
}
