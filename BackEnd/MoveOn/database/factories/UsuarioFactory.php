<?php

namespace Database\Factories;

use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

class UsuarioFactory extends Factory
{
    protected $model = Usuario::class;

    public function definition()
    {
        return [
            'id_usuario' => $this->faker->uuid(),
            'nombre'     => $this->faker->name,
            'correo'     => $this->faker->unique()->safeEmail,
            'contrasena' => bcrypt('Dedede123'), // Contraseña fija para pruebas
            'edad'       => $this->faker->numberBetween(18, 80),
            'sexo'       => $this->faker->randomElement(['hombre', 'mujer']),
            'rol'        => $this->faker->randomElement(['Usuario', 'Moderador', 'Administrador']),
        ];
    }
}
