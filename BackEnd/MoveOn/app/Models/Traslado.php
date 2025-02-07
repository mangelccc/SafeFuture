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

    // Relación: Traslado pertenece a un Usuario
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario');
    }

    // Relación: Traslado tiene una Ciudad de origen
    public function ciudadOrigen()
    {
        return $this->belongsTo(Ciudad::class, 'cod_ciudad_origen');
    }

    // Relación: Traslado tiene una Ciudad de destino
    public function ciudadDestino()
    {
        return $this->belongsTo(Ciudad::class, 'cod_ciudad_destino');
    }
}
