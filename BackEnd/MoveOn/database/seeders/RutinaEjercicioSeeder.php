<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\RutinaEjercicio;

class RutinaEjercicioSeeder extends Seeder
{
    public function run()
    {
        RutinaEjercicio::factory()->count(10)->create();
    }
}
