<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UsuarioDieta extends Model
{
    use HasFactory;

    protected $table = 'usuario_dieta';
    protected $primaryKey = 'id_usuario_dieta';
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = [
        'id_usuario',
        'id_dieta',
        'peso_usuario',
        'altura_usuario',
        'actividad_fisica',
        'objetivo',
        'estado',
    ];
}
