<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UsuarioDieta;

class UsuarioDietaSeeder extends Seeder
{
    public function run()
    {
        UsuarioDieta::factory()->count(10)->create();
    }
}
