<?php

namespace Database\Factories;

use App\Models\Ciudad;
use App\Models\Pais;
use Illuminate\Database\Eloquent\Factories\Factory;

class CiudadFactory extends Factory
{
    protected $model = Ciudad::class;

    public function definition()
    {
        // Aseguramos que exista al menos un país; de lo contrario se crea uno.
        $pais = Pais::inRandomOrder()->first() ?: Pais::factory()->create();

        return [
            'nombre'   => $this->faker->city,
            'cod_pais' => $pais->cod_pais,
        ];
    }
}
