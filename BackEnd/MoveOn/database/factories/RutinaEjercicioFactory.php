<?php

namespace Database\Factories;

use App\Models\RutinaEjercicio;
use Illuminate\Database\Eloquent\Factories\Factory;

class RutinaEjercicioFactory extends Factory
{
    protected $model = RutinaEjercicio::class;

    public function definition()
    {
        return [
            'id_rutina'        => \App\Models\Rutina::factory(),
            'id_ejercicio'     => \App\Models\Ejercicio::factory(),
            'num_series'       => $this->faker->numberBetween(1, 5),
            'num_repeticiones' => $this->faker->numberBetween(5, 20),
        ];
    }
}
