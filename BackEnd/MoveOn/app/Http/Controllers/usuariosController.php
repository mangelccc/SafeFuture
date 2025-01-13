<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class usuariosController extends Controller
{
    public function index(){
       $usuarios = usuarios::all();
       if($usuarios->isEmpty()){
           $data = [
               'message' => 'No hay usuarios registrados',
               'status' => 200
           ];
           return response()->json($data, 200);
       }

        $data = [
            'usuarios' => $usuarios,
            'status' => 200
        ];
        return response()->json($data, 200);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'dni' => 'required|string|max:20|unique:usuarios,dni',
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:usuarios,email',
            'password' => 'required|string|min:8', // Contraseña con un mínimo de 8 caracteres
            'direccion' => 'required|string|max:255',
            'fecha_nacimiento' => 'required|date|before:today', // Validar que la fecha sea anterior a hoy
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Errores de validación.',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data,400);
        }

        // Crear un nuevo usuario
        $usuario = Usuarios::create([
            'dni' => $request->dni,
            'nombre' => $request->nombre,
            'apellidos' => $request->apellidos,
            'email' => $request->email,
            'password' => $request->password, // Encriptar la contraseña antes de guardarla
            'direccion' => $request->direccion,
            'fecha_nacimiento' => $request->fecha_nacimiento,
        ]);

        if(!$usuario){
            $data = [
                'message' => $usuario,
                'status' => 201
            ];
            return response()->json($data,400);
        }
    }

    public function show($id)
    {
        $usuario = Usuarios::find($id);

        if(!$usuario){
            $data = [
                'message' => $usuario,
                'status' => 404
            ];
            return response()->json($data, 404);
        }
        $data = [
            'usuario' => $usuario,
            'status' => 200
        ];

        return response()->json($data, 200);
    }
    public function destroy($id){
        $usuario = Usuarios::find($id);

        if(!$usuario){
            $data = [
                'message' => $usuario,
                'status' => 404
            ];
            return response()->json($data, 404);
        }
        $usuario->delete();

        $data = [
            'message' => 'Usuario eliminato',
            'status' => 200
        ];

        return response()->json($data, 200);
    }
    public function update(Request $request, $id){
        $usuario = Usuarios::find($id);

        if(!$usuario){
            $data = [
                'message' => 'Usuario no encontrado.',
                'status' => 404
            ];
            return response()->json($data, 404);
        }
        $validator = Validator::make($request->all(), [
            'dni' => 'required|string|max:20',
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:8',
            'direccion' => 'required|string|max:255',
            'fecha_nacimiento' => 'required|date|before:today',
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validacion de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data,400);
        }

        $usuario->dni = $request->dni;
        $usuario->nombre = $request->nombre;
        $usuario->apellidos = $request->apellidos;
        $usuario->email = $request->email;
        $usuario->password = $request->password;
        $usuario->direccion = $request->direccion;
        $usuario->fecha_nacimiento = $request->fecha_nacimiento;

        $usuario->save();

        $data = [
            'message' => 'Usuario actualizado',
            'usuario' => $usuario,
            'status' => 200
        ];
        return response()->json($data, 200);

    }
    public function updatePartial(Request $request, $id){
        $usuario = Usuarios::find($id);

        if(!$usuario){
            $data = [
                'message' => 'Usuario no encontrado.',
                'status' => 404
            ];
            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'dni' => 'string|max:20',
            'nombre' => 'string|max:255',
            'apellidos' => 'string|max:255',
            'email' => 'email|max:255',
            'password' => 'string|min:8',
            'direccion' => 'string|max:255',
            'fecha_nacimiento' => 'date|before:today',
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validacion de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data,400);
        }
        // Actualizar únicamente los campos enviados en el request
        if ($request->has('dni')) {
            $usuario->dni = $request->dni;
        }
        if ($request->has('nombre')) {
            $usuario->nombre = $request->nombre;
        }
        if ($request->has('apellidos')) {
            $usuario->apellidos = $request->apellidos;
        }
        if ($request->has('email')) {
            $usuario->email = $request->email;
        }
        if ($request->has('password')) {
            $usuario->password = $request->password;
        }
        if ($request->has('direccion')) {
            $usuario->direccion = $request->direccion;
        }
        if ($request->has('fecha_nacimiento')) {
            $usuario->fecha_nacimiento = $request->fecha_nacimiento;
        }

        // Guardar los cambios
        $usuario->save();

        return response()->json([
            'message' => 'Usuario actualizado correctamente.',
            'usuario' => $usuario,
            'status' => 200
        ], 200);
    }
}
