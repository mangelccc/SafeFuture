<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ejercicio;

class EjercicioSeeder extends Seeder
{
    public function run()
    {
        Ejercicio::factory()->count(10)->create();
    }
}
