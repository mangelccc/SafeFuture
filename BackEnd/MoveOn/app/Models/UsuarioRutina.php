<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UsuarioRutina extends Model
{
    use HasFactory;

    protected $table = 'usuario_rutina';
    protected $primaryKey = 'id_usuario_rutina';
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = [
        'id_usuario',
        'id_rutina',
        'fecha_inicio',
        'fecha_fin'
    ];
}
