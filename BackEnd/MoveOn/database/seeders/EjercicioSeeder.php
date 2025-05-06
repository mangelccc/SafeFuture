<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EjercicioSeeder extends Seeder
{
    public function run()
    {
        DB::table('ejercicios')->insert([
            [
                'nombre' => 'Sentadillas',
                'descripcion' => 'Ejercicio básico para trabajar cuádriceps, glúteos y core.',
                'video_url' => 'https://www.ejemplo.com/sentadillas',
                'imagen_url' => 'https://www.ejemplo.com/img/sentadillas.jpg',
                'grupo_muscular' => 'Piernas'
            ],
            [
                'nombre' => 'Press de banca',
                'descripcion' => 'Ejercicio clave para pecho, hombros y tríceps.',
                'video_url' => 'https://www.ejemplo.com/press-banca',
                'imagen_url' => 'https://www.ejemplo.com/img/press-banca.jpg',
                'grupo_muscular' => 'Pecho'
            ],
            [
                'nombre' => 'Peso muerto',
                'descripcion' => 'Ejercicio fundamental para espalda baja, glúteos y piernas.',
                'video_url' => 'https://www.ejemplo.com/peso-muerto',
                'imagen_url' => 'https://www.ejemplo.com/img/peso-muerto.jpg',
                'grupo_muscular' => 'Espalda baja'
            ],
            [
                'nombre' => 'Dominadas',
                'descripcion' => 'Ejercicio para espalda y bíceps usando el peso corporal.',
                'video_url' => 'https://www.ejemplo.com/dominadas',
                'imagen_url' => 'https://www.ejemplo.com/img/dominadas.jpg',
                'grupo_muscular' => 'Espalda'
            ],
            [
                'nombre' => 'Press militar',
                'descripcion' => 'Press vertical con barra o mancuernas para hombros.',
                'video_url' => 'https://www.ejemplo.com/press-militar',
                'imagen_url' => 'https://www.ejemplo.com/img/press-militar.jpg',
                'grupo_muscular' => 'Hombros'
            ],
            [
                'nombre' => 'Curl de bíceps',
                'descripcion' => 'Ejercicio de aislamiento para trabajar los bíceps.',
                'video_url' => 'https://www.ejemplo.com/curl-biceps',
                'imagen_url' => 'https://www.ejemplo.com/img/curl-biceps.jpg',
                'grupo_muscular' => 'Bíceps'
            ],
            [
                'nombre' => 'Fondos en paralelas',
                'descripcion' => 'Ejercicio para trabajar pecho, tríceps y hombros.',
                'video_url' => 'https://www.ejemplo.com/fondos',
                'imagen_url' => 'https://www.ejemplo.com/img/fondos.jpg',
                'grupo_muscular' => 'Tríceps'
            ],
            [
                'nombre' => 'Remo con barra',
                'descripcion' => 'Ejercicio para espalda media y bíceps.',
                'video_url' => 'https://www.ejemplo.com/remo-barra',
                'imagen_url' => 'https://www.ejemplo.com/img/remo-barra.jpg',
                'grupo_muscular' => 'Espalda'
            ],
            [
                'nombre' => 'Crunch abdominal',
                'descripcion' => 'Ejercicio clásico para fortalecer los abdominales.',
                'video_url' => 'https://www.ejemplo.com/crunch',
                'imagen_url' => 'https://www.ejemplo.com/img/crunch.jpg',
                'grupo_muscular' => 'Abdominales'
            ],
            [
                'nombre' => 'Gemelos de pie',
                'descripcion' => 'Ejercicio para fortalecer las pantorrillas.',
                'video_url' => 'https://www.ejemplo.com/gemelos',
                'imagen_url' => 'https://www.ejemplo.com/img/gemelos.jpg',
                'grupo_muscular' => 'Piernas'
            ]
        ]);
    }
}
