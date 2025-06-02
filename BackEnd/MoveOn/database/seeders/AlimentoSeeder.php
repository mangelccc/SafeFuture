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
        $driver = DB::getDriverName();

        // Desactivar claves foráneas según driver
        if ($driver === 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        } elseif ($driver === 'sqlite') {
            DB::statement('PRAGMA foreign_keys = OFF;');
        }

        Alimento::truncate();

        // Reactivar claves foráneas
        if ($driver === 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        } elseif ($driver === 'sqlite') {
            DB::statement('PRAGMA foreign_keys = ON;');
        }

        // Leemos el SQL
        $sql = File::get(database_path('sql/alimentos.sql'));

        // Si es SQLite, reemplazamos NOW() por CURRENT_TIMESTAMP
        if ($driver === 'sqlite') {
            $search  = ['NOW()', 'CURRENT_TIMESTAMP()'];
            $replace = ['CURRENT_TIMESTAMP', 'CURRENT_TIMESTAMP'];
            $sql = str_replace($search, $replace, $sql);
        }

        DB::unprepared($sql);
    }
}
