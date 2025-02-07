<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alimento extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre', // Otros campos de la tabla alimentos
    ];

    // Relación: un alimento puede pertenecer a muchas dietas
    public function dietas()
    {
        return $this->belongsToMany(Dieta::class, 'alimento_dieta', 'alimento_id', 'dieta_id');
    }
}
