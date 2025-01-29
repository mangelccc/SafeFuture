<?php

namespace Database\Factories;

use App\Models\Usuario;


class UsuarioFactory extends Factory
{
    /**
     * Run the database seeds.
     */
    public function definition(): array
    {
        return [
            'dni' => fake()->randomNumber(8),
            'nombre' => fake()->randomName(),
            'apellidos' => fake()->randomSurname(),
            'email' => fake()->randomEmail(),
            'password' => fake()->randomPassword()->encrypted(),
            'direccion' => fake()->randomNameAddress(),
            'fecha_nacimiento' => fake()->randomDate(),
            'rol_id' => 1, // Asegúrate de incluir un valor válido para 'rol_id'


        ];
    }
}
