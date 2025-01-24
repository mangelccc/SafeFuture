<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rols')->insert([
            ['nombre' => 'Administrador', 'descripcion' => 'Tiene acceso total a la aplicación.', 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Usuario', 'descripcion' => 'Acceso limitado a funciones específicas.', 'created_at' => now(), 'updated_at' => now()],
            ['nombre' => 'Editor', 'descripcion' => 'Puede editar contenido, pero no gestionar usuarios.', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
