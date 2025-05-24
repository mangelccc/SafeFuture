<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pais extends Model
{
    use HasFactory;

    protected $table = 'pais';
    protected $primaryKey = 'id_pais';
    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = [
        'usuario_uuid',
        'latitud',
        'longitud',
        'nombre',
        'descripcion'
    ];
}
