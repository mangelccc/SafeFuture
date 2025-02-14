<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Dieta;

class DietaSeeder extends Seeder
{
    public function run()
    {
        Dieta::factory()->count(10)->create();
    }
}
