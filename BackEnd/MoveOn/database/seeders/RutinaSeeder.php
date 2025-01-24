<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RutinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rutinas')->insert([
            [
                'nombre' => 'Rutina de fuerza',
                'detalles' => json_encode([
                    'dia_1' => [
                        'ejercicio_1' => [
                            'nombre' => 'Sentadillas con barra',
                            'series' => 4,
                            'repeticiones' => 10,
                        ],
                        'ejercicio_2' => [
                            'nombre' => 'Prensa de piernas',
                            'series' => 3,
                            'repeticiones' => 12,
                        ],
                        'ejercicio_3' => [
                            'nombre' => 'Peso muerto rumano',
                            'series' => 3,
                            'repeticiones' => 10,
                        ],
                    ],
                    'dia_2' => [
                        'ejercicio_1' => [
                            'nombre' => 'Press banca',
                            'series' => 4,
                            'repeticiones' => 8,
                        ],
                        'ejercicio_2' => [
                            'nombre' => 'Press inclinado con mancuernas',
                            'series' => 3,
                            'repeticiones' => 12,
                        ],
                        'ejercicio_3' => [
                            'nombre' => 'Fondos en paralelas',
                            'series' => 3,
                            'repeticiones' => 12,
                        ],
                    ],
                    'dia_3' => [
                        'ejercicio_1' => [
                            'nombre' => 'Dominadas',
                            'series' => 4,
                            'repeticiones' => 8,
                        ],
                        'ejercicio_2' => [
                            'nombre' => 'Remo con barra',
                            'series' => 3,
                            'repeticiones' => 12,
                        ],
                        'ejercicio_3' => [
                            'nombre' => 'Face pulls',
                            'series' => 3,
                            'repeticiones' => 15,
                        ],
                    ],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Rutina de resistencia',
                'detalles' => json_encode([
                    'dia_1' => [
                        'ejercicio_1' => [
                            'nombre' => 'Caminata rápida en cinta',
                            'duracion' => '30 minutos',
                        ],
                        'ejercicio_2' => [
                            'nombre' => 'Elíptica',
                            'duracion' => '20 minutos',
                        ],
                    ],
                    'dia_2' => [
                        'ejercicio_1' => [
                            'nombre' => 'Entrenamiento HIIT',
                            'duracion' => '15 minutos',
                            'detalles' => 'Sprints de 30 segundos, descanso 1 minuto',
                        ],
                        'ejercicio_2' => [
                            'nombre' => 'Saltos de cuerda',
                            'series' => 3,
                            'repeticiones' => 50,
                        ],
                    ],
                    'dia_3' => [
                        'ejercicio_1' => [
                            'nombre' => 'Ciclismo',
                            'duracion' => '40 minutos',
                        ],
                    ],
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
