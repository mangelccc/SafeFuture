<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuario';
    protected $primaryKey = 'id_usuario';
    protected $hidden = ['created_at', 'updated_at'];

    // Relación: Un Usuario tiene muchos Traslados
    public function traslados()
    {
        return $this->hasMany(Traslado::class, 'id_usuario', 'id_usuario');
    }

    // Relación: Usuario tiene muchas Dietas (vía la tabla pivote usuario_dieta)
    public function dietas()
    {
        return $this->belongsToMany(Dieta::class, 'usuario_dieta', 'id_usuario', 'id_dieta')
            ->withPivot('peso_usuario', 'altura_usuario', 'actividad_fisica', 'objetivo', 'estado')
            ->withTimestamps();
    }

    // Relación: Usuario tiene muchas Rutinas (vía la tabla pivote usuario_rutina)
    public function rutinas()
    {
        return $this->belongsToMany(Rutina::class, 'usuario_rutina', 'id_usuario', 'id_rutina')
            ->withPivot('fecha_inicio', 'fecha_fin')
            ->withTimestamps();
    }
}
