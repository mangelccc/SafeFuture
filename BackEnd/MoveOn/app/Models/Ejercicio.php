<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ejercicio extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre', 'id_rutina', // Otros campos de la tabla ejercicios
    ];

    // Relación: un ejercicio pertenece a una rutina
    public function rutina()
    {
        return $this->belongsTo(Rutina::class, 'id_rutina');
    }
}
