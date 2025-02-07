<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Alimento extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'categoria',
        'imagen_url',
        'descripcion',
        'peso_kg',
        'precio_euros',
        'codigo_barras',
        'calorias',
        'proteinas',
        'grasas',
        'carbohidratos'
    ];

    // Especificamos el nombre de la tabla y la clave primaria
    protected $table = 'alimento';
    protected $primaryKey = 'id_alimento';

    // Ocultamos los timestamps en la respuesta de la API
    protected $hidden = ['created_at', 'updated_at'];
}
