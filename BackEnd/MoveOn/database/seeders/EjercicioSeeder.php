<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EjercicioSeeder extends Seeder
{
    public function run()
    {
        DB::table('ejercicio')->insert([
            [
                'nombre' => 'Sentadillas',
                'descripcion' => 'Ejercicio básico para trabajar cuádriceps, glúteos y core.',
                'video_url' => 'https://www.ejemplo.com/sentadillas',
                'imagen_url' => 'https://i.ibb.co/ZzVpDHRf/images.jpg',
                'grupo_muscular' => 'Piernas'
            ],
            [
                'nombre' => 'Press de banca',
                'descripcion' => 'Ejercicio clave para pecho, hombros y tríceps.',
                'video_url' => 'https://www.ejemplo.com/press-banca',
                'imagen_url' => 'https://i.ibb.co/svzF2Kj9/bench-press-800.jpg',
                'grupo_muscular' => 'Pecho'
            ],
            [
                'nombre' => 'Peso muerto',
                'descripcion' => 'Ejercicio fundamental para espalda baja, glúteos y piernas.',
                'video_url' => 'https://www.ejemplo.com/peso-muerto',
                'imagen_url' => 'https://i.ibb.co/JRs1H7Mp/sumo-deadlift-800.jpg',
                'grupo_muscular' => 'Espalda baja'
            ],
            [
                'nombre' => 'Dominadas',
                'descripcion' => 'Ejercicio para espalda y bíceps usando el peso corporal.',
                'video_url' => 'https://www.ejemplo.com/dominadas',
                'imagen_url' => 'https://i.ibb.co/ymDt4rj7/pull-ups-800.jpg',
                'grupo_muscular' => 'Espalda'
            ],
            [
                'nombre' => 'Press militar',
                'descripcion' => 'Press vertical con barra o mancuernas para hombros.',
                'video_url' => 'https://www.ejemplo.com/press-militar',
                'imagen_url' => 'https://i.ibb.co/QjjxPPNM/2-Press-militar-en-banco-con-mancuernas-1.png',
                'grupo_muscular' => 'Hombros'
            ],
            [
                'nombre' => 'Curl de bíceps',
                'descripcion' => 'Ejercicio de aislamiento para trabajar los bíceps.',
                'video_url' => 'https://www.ejemplo.com/curl-biceps',
                'imagen_url' => 'https://i.ibb.co/HpLbQDcp/descarga.jpg',
                'grupo_muscular' => 'Bíceps'
            ],
            [
                'nombre' => 'Fondos en paralelas',
                'descripcion' => 'Ejercicio para trabajar pecho, tríceps y hombros.',
                'video_url' => 'https://www.ejemplo.com/fondos',
                'imagen_url' => 'https://i.ibb.co/jZPbNt4H/image-full.jpg',
                'grupo_muscular' => 'Tríceps'
            ],
            [
                'nombre' => 'Remo con barra',
                'descripcion' => 'Ejercicio para espalda media y bíceps.',
                'video_url' => 'https://www.ejemplo.com/remo-barra',
                'imagen_url' => 'https://i.ibb.co/7xdvkb4x/bent-over-row-800.jpg',
                'grupo_muscular' => 'Espalda'
            ],
            [
                'nombre' => 'Crunch abdominal',
                'descripcion' => 'Ejercicio clásico para fortalecer los abdominales.',
                'video_url' => 'https://www.ejemplo.com/crunch',
                'imagen_url' => 'https://i.ibb.co/svM2bmFG/abdominal-1203880-960-720.jpg',
                'grupo_muscular' => 'Abdominales'
            ],
            [
                'nombre' => 'Gemelos de pie',
                'descripcion' => 'Ejercicio para fortalecer las pantorrillas.',
                'video_url' => 'https://www.ejemplo.com/gemelos',
                'imagen_url' => 'https://i.ibb.co/BHzcNDGR/machine-calf-raise-800.jpg',
                'grupo_muscular' => 'Piernas'
            ]
        ]);
    }
}
