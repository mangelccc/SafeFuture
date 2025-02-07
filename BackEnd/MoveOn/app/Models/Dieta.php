<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dieta extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre', // Otros campos de la tabla dietas
    ];

    // Relación: una dieta puede tener muchos alimentos
    public function alimentos()
    {
        return $this->belongsToMany(Alimento::class, 'alimento_dieta', 'dieta_id', 'alimento_id');
    }
}
