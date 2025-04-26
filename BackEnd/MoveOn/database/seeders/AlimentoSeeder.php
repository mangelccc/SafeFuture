<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Models\Alimento;

class AlimentoSeeder extends Seeder
{
    public function run()
    {
        // ⚡ Desactivamos las claves foráneas
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        // ⚡ Truncamos la tabla
        Alimento::truncate();

        // ⚡ Reactivamos las claves foráneas
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // ⚡ Ahora podemos insertar datos normalmente
        $sql = File::get(database_path('sql/alimentos.sql'));
        DB::unprepared($sql);
    }
}
