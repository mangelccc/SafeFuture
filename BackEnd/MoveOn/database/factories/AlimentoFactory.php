<?php

namespace Database\Factories;

use App\Models\Alimento;
use Illuminate\Database\Eloquent\Factories\Factory;

class AlimentoFactory extends Factory
{
    protected $model = Alimento::class;

    public function definition()
    {
        return [
            'nombre'        => $this->faker->word,
            'categoria'     => $this->faker->randomElement(['Proteínas', 'Carbohidratos', 'Grasas', 'Vitaminas']),
            'imagen_url'    => $this->faker->imageUrl(640, 480, 'food'),
            'descripcion'   => $this->faker->sentence,
            'peso_kg'       => $this->faker->randomFloat(2, 0.1, 10),
            'precio_euros'  => $this->faker->randomFloat(2, 0.5, 100),
            'codigo_barras' => $this->faker->ean13,
            'calorias'      => $this->faker->randomFloat(2, 50, 500),
            'proteinas'     => $this->faker->randomFloat(2, 0, 50),
            'grasas'        => $this->faker->randomFloat(2, 0, 50),
            'carbohidratos' => $this->faker->randomFloat(2, 0, 50),
        ];
    }
}
