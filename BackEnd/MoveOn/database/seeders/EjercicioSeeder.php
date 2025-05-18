<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Arr;

class EjercicioSeeder extends Seeder
{
    public function run()
    {
        // Clave de API hardcodeada (no usa .env)
        $apiKey = '297fec09b1msh94028e65c4e9cfbp12c1b0jsn1db340470ca0';

        // Configuración de la API externa
        $url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1300&offset=0';
        $headers = [
            'X-RapidAPI-Key'  => $apiKey,
            'X-RapidAPI-Host' => 'exercisedb.p.rapidapi.com',
            'Accept'          => 'application/json',
        ];

        $this->command->info('Llamando a API externa con clave hardcodeada...');

        // Llamada a la API con retry
        $response = Http::withHeaders($headers)
            ->timeout(10)
            ->retry(2, 100)
            ->get($url);

        if ($response->successful()) {
            $ejercicios = $response->json();

            foreach ($ejercicios as $item) {
                DB::table('ejercicio')->insert([
                    'nombre'         => Arr::get($item, 'name', ''),
                    'descripcion'    => is_array(Arr::get($item, 'instructions'))
                        ? implode(' ', Arr::get($item, 'instructions'))
                        : Arr::get($item, 'instructions', ''),
                    'imagen_url'     => Arr::get($item, 'gifUrl', ''),
                    'video_url'      => '',
                    'grupo_muscular' => Arr::get($item, 'target', ''),
                    'created_at'     => now(),
                    'updated_at'     => now(),
                ]);
            }

            $this->command->info('Ejercicios cargados correctamente.');
        } else {
            $this->command->error(sprintf(
                "Error al obtener datos de la API externa: código %d, cuerpo: %s",
                $response->status(),
                substr($response->body(), 0, 200)
            ));
        }
    }
}
