<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $this->call([
            PaisSeeder::class,
            CiudadSeeder::class,
            UsuarioSeeder::class,
            DietaSeeder::class,
            RutinaSeeder::class,
            EjercicioSeeder::class,
            AlimentoSeeder::class,
            TrasladoSeeder::class,

            UsuarioDietaSeeder::class,
            RutinaEjercicioSeeder::class,
            UsuarioRutinaSeeder::class,
        ]);
    }
}
