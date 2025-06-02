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

        if (!$usuario || !Hash::check($request->contrasena, $usuario->contrasena)) {
            return response()->json([
                'message' => 'Credenciales incorrectas',
                'status'  => 401
            ], 401);
        }

        // Crear token con Sanctum
        $token = $usuario->createToken('api-token')->plainTextToken;

        // Retornar token junto con info del usuario
        return response()->json([
            'message' => 'Login exitoso',
            'usuario' => $usuario,
            'token'   => $token,
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

    //Funciones definidas por el programador.

    public function getDietasPorUsuario($id_usuario)
    {
        $usuario = Usuario::find($id_usuario);
        if (!$usuario) {
            return response()->json([
                'message' => 'Usuario no encontrado',
                'status'  => 404
            ], 404);
        }

        $dietas = $usuario->dietas()->withPivot('id_usuario_dieta', 'peso_usuario', 'altura_usuario', 'actividad_fisica', 'objetivo', 'estado')->get();

        $dietasTransformadas = $dietas->map(function ($dieta) {
            $dieta->id_dieta = $dieta->pivot->id_usuario_dieta;
            unset($dieta->pivot->id_usuario_dieta); // Oculta ese campo de la respuesta
            return $dieta;
        });

        return response()->json([
            'dietas' => $dietasTransformadas,
            'status' => 200
        ], 200);
    }


     // Comprueba si un correo ya está en uso.

    public function emailExists(Request $request)
    {
        $request->validate([
            'correo' => 'required|email|max:100'
        ]);

        $usuario = Usuario::where('correo', $request->correo)->first();

        if ($usuario) {
            // Generar un token de acceso temporal
            $token = $usuario->createToken('temp-token', ['*'], now()->addMinutes(5))->plainTextToken;


            return response()->json([
                'exists'     => true,
                'id_usuario' => $usuario->id_usuario,
                'token'      => $token,
            ], 200);
        }

        return response()->json([
            'exists'     => false,
            'id_usuario' => null,
            'token'      => null,
        ], 200);
    }

    public function resetPasswordWithToken(Request $request, $id)
    {
        // Validamos la nueva contraseña
        $request->validate([
            'contrasena' => 'required|string|min:8',
        ]);

        // Extraemos el token de la cabecera Authorization
        $authHeader = $request->header('Authorization');

        if (!$authHeader || !str_starts_with($authHeader, 'Bearer ')) {
            return response()->json(['message' => 'Token no proporcionado.'], 401);
        }

        $plainToken = substr($authHeader, 7); // quitamos "Bearer "

        // Verificamos si ese token existe en la base de datos
        $tokenModel = \Laravel\Sanctum\PersonalAccessToken::findToken($plainToken);

        if (!$tokenModel || $tokenModel->tokenable_id !== $id) {
            return response()->json(['message' => 'Token inválido o no autorizado.'], 403);
        }

        // Buscamos al usuario
        $usuario = Usuario::find($id);
        if (!$usuario) {
            return response()->json(['message' => 'Usuario no encontrado.'], 404);
        }

        // Guardamos la nueva contraseña
        $usuario->contrasena = Hash::make($request->contrasena);
        $usuario->save();

        // Eliminamos el token para que no se reutilice
        $tokenModel->delete();

        return response()->json(['message' => 'Contraseña actualizada con éxito.']);
    }


}
