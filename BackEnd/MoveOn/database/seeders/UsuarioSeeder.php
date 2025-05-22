<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\Usuario;

class UsuarioSeeder extends Seeder
{
    public function run()
    {
        Usuario::create([
            'id_usuario' => Str::uuid(), // Generar UUID manualmente
            'nombre'     => 'Admin Principal',
            'correo'     => 'admin@gmail.com',
            'contrasena' => Hash::make('123'), // Nunca guardes contraseñas en texto plano
            'edad'       => 30,
            'sexo'       => 'hombre',
            'rol'        => 'Administrador',
        ]);
    }
}
