<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Traslado;

class TrasladoSeeder extends Seeder
{
    public function run()
    {
        Traslado::factory()->count(10)->create();
    }
}
