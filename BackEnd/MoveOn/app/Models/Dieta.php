<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Dieta extends Model
{
    use HasFactory;

    protected $table = 'dieta';
    protected $primaryKey = 'id_dieta';
    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = [
        'id_dieta',
        'nombre',
        'descripcion'
    ];

    // Relaciones
    public function usuarios()
    {
        return $this->belongsToMany(Usuario::class, 'usuario_dieta', 'id_dieta', 'id_usuario')
            ->withPivot('peso_usuario', 'altura_usuario', 'actividad_fisica', 'objetivo', 'estado')
            ->withTimestamps();
    }

    public function alimentos()
    {
        return $this->belongsToMany(Alimento::class, 'alimento_dieta', 'id_dieta', 'id_alimento')
            ->withPivot('cantidad')
            ->withTimestamps();
    }
}
