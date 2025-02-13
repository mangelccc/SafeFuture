<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use App\Http\Requests\StoreUsuarioRequest;
use App\Http\Requests\UpdateUsuarioRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();
        if ($usuarios->isEmpty()) {
            return response()->json([
                'message' => 'No hay usuarios registrados',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'usuarios' => $usuarios,
            'status'   => 200
        ], 200);
    }

    public function login(Request $request)
    {
        // Validar que se envíen correo y contraseña
        $request->validate([
            'correo'     => 'required|email',
            'contrasena' => 'required|string'
        ]);

        // Buscar al usuario por correo
        $usuario = Usuario::where('correo', $request->correo)->first();

        if (!$usuario) {
            return response()->json([
                'message' => 'Credenciales incorrectas',
                'status'  => 401
            ], 401);
        }

        // Comparar la contraseña en texto plano con la contraseña cifrada almacenada
        if (!Hash::check($request->contrasena, $usuario->contrasena)) {
            return response()->json([
                'message' => 'Credenciales incorrectas',
                'status'  => 401
            ], 401);
        }

        // Si la autenticación es exitosa, se puede retornar información del usuario
        return response()->json([
            'message' => 'Login exitoso',
            'usuario' => $usuario,
            'status'  => 200
        ], 200);
    }
    public function store(StoreUsuarioRequest $request)
    {
        $data = $request->validated();
        $data['contrasena'] = Hash::make($data['contrasena']);
        $usuario = Usuario::create($data);
        if (!$usuario) {
            return response()->json([
                'message' => 'Error al crear el usuario',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message' => 'Usuario creado',
            'usuario' => $usuario,
            'status'  => 201
        ], 201);
    }

    public function show($id)
    {
        $usuario = Usuario::find($id);
        if (!$usuario) {
            return response()->json([
                'message' => 'Usuario no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'usuario' => $usuario,
            'status'  => 200
        ], 200);
    }

    public function update(UpdateUsuarioRequest $request, $id)
    {
        $usuario = Usuario::find($id);
        if (!$usuario) {
            return response()->json([
                'message' => 'Usuario no encontrado',
                'status'  => 404
            ], 404);
        }
        $data = $request->validated();
        $data['contrasena'] = Hash::make($data['contrasena']);
        $usuario->update($data);
        return response()->json([
            'message' => 'Usuario actualizado',
            'usuario' => $usuario,
            'status'  => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id)
    {
        $usuario = Usuario::find($id);
        if (!$usuario) {
            return response()->json([
                'message' => 'Usuario no encontrado',
                'status'  => 404
            ], 404);
        }
        $validator = \Validator::make($request->all(), [
            'nombre'      => 'sometimes|string|max:100',
            'correo'      => 'sometimes|email|max:100|unique:usuario,correo,' . $id . ',id_usuario',
            'contrasena'  => 'sometimes|string|min:8|max:100',
            'edad'        => 'sometimes|integer',
            'sexo'        => 'sometimes|in:hombre,mujer',
            'rol'         => 'sometimes|in:Usuario,Moderador,Administrador'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }
        $data = $request->all();
        if (isset($data['contrasena'])) {
            $data['contrasena'] = Hash::make($data['contrasena']);
        }
        $usuario->update($data);
        return response()->json([
            'message' => 'Usuario actualizado parcialmente',
            'usuario' => $usuario,
            'status'  => 200
        ], 200);
    }

    public function destroy($id)
    {
        $usuario = Usuario::find($id);
        if (!$usuario) {
            return response()->json([
                'message' => 'Usuario no encontrado',
                'status'  => 404
            ], 404);
        }
        $usuario->delete();
        return response()->json([
            'message' => 'Usuario eliminado',
            'status'  => 200
        ], 200);
    }
}
