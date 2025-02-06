<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alimento extends Model
{
    use HasFactory;
    protected $table = 'alimento';
    protected $primaryKey = 'id_alimento';
    protected $fillable = ['nombre', 'categoria', 'imagen_url', 'descripcion', 'peso_kg', 'precio_euros', 'codigo_barras', 'calorias', 'proteinas', 'grasas', 'carbohidratos'];
}
