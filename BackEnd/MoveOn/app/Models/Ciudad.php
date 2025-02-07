<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre', 'cod_pais', // Otros campos de la tabla ciudad
    ];

    // Relación: una ciudad pertenece a un país
    public function pais()
    {
        return $this->belongsTo(Pais::class, 'cod_pais');
    }

    // Relación: una ciudad puede tener muchos traslados como origen
    public function trasladosOrigen()
    {
        return $this->hasMany(Traslado::class, 'ciudad_origen');
    }

    // Relación: una ciudad puede tener muchos traslados como destino
    public function trasladosDestino()
    {
        return $this->hasMany(Traslado::class, 'ciudad_destino');
    }
}
