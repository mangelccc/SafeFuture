<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Alimento;

class AlimentoSeeder extends Seeder
{
    public function run()
    {
        Alimento::factory()->count(10)->create();
    }
}
