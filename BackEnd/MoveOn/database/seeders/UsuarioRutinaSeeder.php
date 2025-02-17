<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UsuarioRutina;

class UsuarioRutinaSeeder extends Seeder
{
    public function run()
    {
        UsuarioRutina::factory()->count(10)->create();
    }
}
