<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Traslado extends Model
{
    use HasFactory;

    protected $table = 'traslado';
    protected $primaryKey = 'id_traslado';
    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = [
        'uuid',
        'aeropuerto_salida',
        'aeropuerto_llegada',
        'fecha_salida',
        'estado',
        'codigo'
    ];
}
