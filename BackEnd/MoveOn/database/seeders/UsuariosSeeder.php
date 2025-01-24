<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Usuario;

class UsuariosSeeder extends Seeder
{
    public function run(): void
    {
        Usuario::create([
            'dni' => '71790428b',
            'nombre' => 'Lora',
            'apellidos' => 'Daugherty',
            'email' => 'briana73@example.com',
            'password' => bcrypt('password123'),
            'direccion' => '49714 Hackett Stravenue Port Garland, HI 10016',
            'fecha_nacimiento' => '1989-04-29',
            'rol_id' => 1, // Relación con el rol "Administrador"
        ]);
    }
}
