<?php

namespace Database\Factories;

use App\Models\UsuarioRutina;
use Illuminate\Database\Eloquent\Factories\Factory;

class UsuarioRutinaFactory extends Factory
{
    protected $model = UsuarioRutina::class;

    public function definition()
    {
        return [
            'id_usuario'  => \App\Models\Usuario::factory(),
            'id_rutina'   => \App\Models\Rutina::factory(),
            'fecha_inicio'=> $this->faker->date(),
            'fecha_fin'   => $this->faker->optional()->date(),
        ];
    }
}
