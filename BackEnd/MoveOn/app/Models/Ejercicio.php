<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Ejercicio extends Model
{
    use HasFactory;
    protected $table = 'ejercicio';
    protected $primaryKey = 'id_ejercicio';
    protected $hidden = ['created_at', 'updated_at'];

    // Relación: Ejercicio pertenece a muchas Rutinas (vía la tabla pivote rutina_ejercicio)
    public function rutinas()
    {
        return $this->belongsToMany(Rutina::class, 'rutina_ejercicio', 'id_ejercicio', 'id_rutina')
            ->withPivot('num_series', 'num_repeticiones')
            ->withTimestamps();
    }
}
