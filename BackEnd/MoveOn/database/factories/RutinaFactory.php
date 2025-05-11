<?php

namespace Database\Factories;

use App\Models\Rutina;
use Illuminate\Database\Eloquent\Factories\Factory;

class RutinaFactory extends Factory
{
    protected $model = Rutina::class;

    public function definition()
    {
        return [
            'uuid'        => $this->faker->uuid,
            'uuid_usuario'=> $this->faker->uuid,
            'nombre'      => $this->faker->word,
            'descripcion' => $this->faker->sentence,
        ];
    }
}
