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

    protected $fillable = [
        'nombre',
        'cod_pais'
    ];

    // Relaciones
    public function pais()
    {
        // El primer 'cod_pais' es el campo foráneo en la tabla "ciudad",
        // y el segundo 'cod_pais' es el campo de la tabla "pais"
        return $this->belongsTo(Pais::class, 'cod_pais', 'cod_pais');
    }

    public function trasladosOrigen()
    {
        return $this->hasMany(Traslado::class, 'cod_ciudad_origen', 'cod_ciudad');
    }

    public function trasladosDestino()
    {
        return $this->hasMany(Traslado::class, 'cod_ciudad_destino', 'cod_ciudad');
    }
}
