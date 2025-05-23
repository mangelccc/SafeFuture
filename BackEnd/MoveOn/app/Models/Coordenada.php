<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Coordenada extends Model
{
    use HasFactory;

    protected $table = 'coordenadas';
    protected $fillable = [
        'usuario_uuid',
        'latitud',
        'longitud',
        'nombre',
        'descripcion',
    ];
}
