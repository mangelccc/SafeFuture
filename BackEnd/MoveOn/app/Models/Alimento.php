<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Alimento extends Model
{
    use HasFactory;

    // Nombre de la tabla y clave primaria
    protected $table = 'alimento';
    protected $primaryKey = 'id_alimento';
    protected $hidden = ['created_at', 'updated_at'];

    // Campos asignables
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
}
