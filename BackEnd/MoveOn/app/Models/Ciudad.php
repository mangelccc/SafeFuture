<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Ciudad extends Model
{
    use HasFactory;
    protected $table = 'ciudad';
    protected $primaryKey = 'cod_ciudad';
    protected $hidden = ['created_at', 'updated_at'];

    // Relación: Ciudad pertenece a un País
    public function pais()
    {
        return $this->belongsTo(Pais::class, 'cod_pais');
    }

    // Relación: Ciudad tiene muchos traslados como origen
    public function trasladosOrigen()
    {
        return $this->hasMany(Traslado::class, 'cod_ciudad_origen', 'cod_ciudad');
    }

    // Relación: Ciudad tiene muchos traslados como destino
    public function trasladosDestino()
    {
        return $this->hasMany(Traslado::class, 'cod_ciudad_destino', 'cod_ciudad');
    }
}
