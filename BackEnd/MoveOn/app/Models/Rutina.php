<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Rutina extends Model
{
    use HasFactory;
    protected $table = 'rutina';
    protected $primaryKey = 'id_rutina';
    protected $hidden = ['created_at', 'updated_at'];

    // Relación: Rutina tiene muchos Ejercicios (vía la tabla pivote rutina_ejercicio)
    public function ejercicios()
    {
        return $this->belongsToMany(Ejercicio::class, 'rutina_ejercicio', 'id_rutina', 'id_ejercicio')
            ->withPivot('num_series', 'num_repeticiones')
            ->withTimestamps();
    }

    // Relación: Rutina pertenece a muchos Usuarios (vía la tabla pivote usuario_rutina)
    public function usuarios()
    {
        return $this->belongsToMany(Usuario::class, 'usuario_rutina', 'id_rutina', 'id_usuario')
            ->withPivot('fecha_inicio', 'fecha_fin')
            ->withTimestamps();
    }
}
