<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Rutina extends Model
{
    use HasFactory;
    protected $table = 'rutina';
    protected $primaryKey = 'id_rutina';

    public function ejercicios()
    {
        return $this->belongsToMany(Ejercicio::class, 'rutina_ejercicio', 'id_rutina', 'id_ejercicio')->withPivot('num_series', 'num_repeticiones');
    }
}
