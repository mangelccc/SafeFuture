<?php

namespace Database\Factories;

use App\Models\UsuarioDieta;
use Illuminate\Database\Eloquent\Factories\Factory;

class UsuarioDietaFactory extends Factory
{
    protected $model = UsuarioDieta::class;

    public function definition()
    {
        return [
            'id_usuario'       => \App\Models\Usuario::factory(),
            'id_dieta'         => \App\Models\Dieta::factory(),
            'peso_usuario'     => $this->faker->randomFloat(2, 50, 100),
            'altura_usuario'   => $this->faker->randomFloat(2, 1.5, 2),
            'actividad_fisica' => $this->faker->randomElement(['Sedentario','Ligero','Moderado','Activo','Muy-activo']),
            'objetivo'         => $this->faker->randomElement(['Perder','Mantener','Ganar']),
            'estado'           => $this->faker->randomElement(['Activa','Finalizada']),
        ];
    }
}
