<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Coordenada;
use App\Models\Usuario;

class CoordenadasSeeder extends Seeder
{
    public function run()
    {
        $usuario = Usuario::first(); // Asegúrate de tener al menos un usuario

        if (!$usuario) {
            $this->command->error('No hay usuarios en la base de datos. Ejecuta el UsuarioSeeder primero.');
            return;
        }

        Coordenada::create([
            'usuario_uuid' => $usuario->id_usuario,
            'latitud'      => 40.416775,
            'longitud'     => -3.703790,
            'nombre'       => 'Madrid Centro',
            'descripcion'  => 'Ubicación de prueba en el centro de Madrid.',
        ]);
    }
}
