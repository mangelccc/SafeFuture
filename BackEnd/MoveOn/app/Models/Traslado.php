<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traslado extends Model
{
    use HasFactory;

    protected $fillable = [
        'usuario_id', 'ciudad_origen', 'ciudad_destino', 'fecha', // Otros campos de la tabla traslados
    ];

    // Relación: un traslado pertenece a un usuario
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    // Relación: un traslado tiene una ciudad de origen
    public function ciudadOrigen()
    {
        return $this->belongsTo(Ciudad::class, 'ciudad_origen');
    }

    // Relación: un traslado tiene una ciudad de destino
    public function ciudadDestino()
    {
        return $this->belongsTo(Ciudad::class, 'ciudad_destino');
    }
}
