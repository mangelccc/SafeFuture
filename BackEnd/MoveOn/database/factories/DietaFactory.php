<?php

namespace Database\Factories;

use App\Models\Dieta;
use Illuminate\Database\Eloquent\Factories\Factory;

class DietaFactory extends Factory
{
    protected $model = Dieta::class;

    public function definition()
    {
        return [
            'nombre'      => $this->faker->word,
            'descripcion' => $this->faker->sentence,
        ];
    }
}
