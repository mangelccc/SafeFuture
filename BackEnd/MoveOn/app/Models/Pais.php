<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pais extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre', // Otros campos de la tabla pais
    ];

    // Relación: un país tiene muchas ciudades
    public function ciudades()
    {
        return $this->hasMany(Ciudad::class, 'cod_pais');
    }
}
