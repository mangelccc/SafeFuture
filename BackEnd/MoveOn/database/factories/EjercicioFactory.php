<?php

namespace Database\Factories;

use App\Models\Ejercicio;
use Illuminate\Database\Eloquent\Factories\Factory;

class EjercicioFactory extends Factory
{
    protected $model = Ejercicio::class;

    public function definition()
    {
        return [
            'nombre'         => $this->faker->word,
            'descripcion'    => $this->faker->sentence,
            'imagen_url'     => $this->faker->imageUrl(640, 480, 'exercise'),
            'video_url'      => $this->faker->url,
            'grupo_muscular' => $this->faker->randomElement(['Pecho', 'Espalda', 'Piernas', 'Brazos', 'Hombros']),
        ];
    }
}
