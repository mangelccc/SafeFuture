<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Rutina;

class RutinaSeeder extends Seeder
{
    public function run()
    {
        Rutina::factory()->count(10)->create();
    }
}
