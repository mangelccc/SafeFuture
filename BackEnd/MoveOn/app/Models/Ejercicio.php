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

    protected $fillable = [
        'nombre',
        'descripcion',
        'imagen_url',
        'video_url',
        'grupo_muscular'
    ];

    // Relaciones
    public function rutinas()
    {
        return $this->belongsToMany(Rutina::class, 'rutina_ejercicio', 'id_ejercicio', 'id_rutina')
            ->withPivot('num_series', 'num_repeticiones')
            ->withTimestamps();
    }
}
