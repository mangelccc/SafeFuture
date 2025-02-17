<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RutinaEjercicio extends Model
{
    use HasFactory;

    protected $table = 'rutina_ejercicio';
    protected $primaryKey = 'id_rutina_ejercicio';
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = [
        'id_rutina',
        'id_ejercicio',
        'num_series',
        'num_repeticiones'
    ];
}
