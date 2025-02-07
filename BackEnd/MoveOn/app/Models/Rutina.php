<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rutina extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre', 'descripcion' // Otros campos de la tabla rutinas
    ];

    // Relación: una rutina puede tener muchos ejercicios
    public function ejercicios()
    {
        return $this->hasMany(Ejercicio::class, 'rutina_id');
    }
}
