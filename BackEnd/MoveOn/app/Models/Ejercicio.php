<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ejercicio extends Model
{
    use HasFactory;
    protected $table = 'ejercicio';
    protected $primaryKey = 'id_ejercicio';

    public function rutinas()
    {
        return $this->belongsToMany(Rutina::class, 'rutina_ejercicio', 'id_ejercicio', 'id_rutina')->withPivot('num_series', 'num_repeticiones');
    }
}
