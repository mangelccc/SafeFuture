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

    protected $fillable = [
        'uuid',
        'uuid_usuario',
        'nombre',
        'descripcion'
    ];


    // Relaciones
    public function ejercicios()
    {
        return $this->belongsToMany(Ejercicio::class, 'rutina_ejercicio', 'id_rutina', 'id_ejercicio')
            ->withPivot('num_series', 'num_repeticiones')
            ->withTimestamps();
    }
}
