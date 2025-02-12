<?php

namespace Database\Factories;

use App\Models\Traslado;
use App\Models\Ciudad;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

class TrasladoFactory extends Factory
{
    protected $model = Traslado::class;

    public function definition()
    {
        // Nos aseguramos que existan al menos un usuario y dos ciudades.
        $usuario = Usuario::inRandomOrder()->first() ?: Usuario::factory()->create();
        $ciudades = Ciudad::inRandomOrder()->take(2)->get();
        if ($ciudades->count() < 2) {
            $ciudades = Ciudad::factory()->count(2)->create();
        }

        return [
            'id_usuario'         => $usuario->id_usuario,
            'cod_ciudad_origen'  => $ciudades->first()->cod_ciudad,
            'cod_ciudad_destino' => $ciudades->last()->cod_ciudad,
            'fecha_solicitud'    => $this->faker->date(),
        ];
    }
}
