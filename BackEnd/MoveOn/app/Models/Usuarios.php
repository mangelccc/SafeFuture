<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Usuarios extends Model
{

    use HasFactory;
    protected $table = 'usuarios';

    protected $fillable = [
        'dni',
        'nombre',
        'apellidos',
        'email',
        'password',
        'direccion',
        'fecha_nacimiento',
    ];
}
