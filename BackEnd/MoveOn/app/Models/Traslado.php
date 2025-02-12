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
        'id_usuario',
        'cod_ciudad_origen',
        'cod_ciudad_destino',
        'fecha_solicitud'
    ];

    // Relaciones
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario', 'id_usuario');
    }

    public function ciudadOrigen()
    {
        return $this->belongsTo(Ciudad::class, 'cod_ciudad_origen', 'cod_ciudad');
    }

    public function ciudadDestino()
    {
        return $this->belongsTo(Ciudad::class, 'cod_ciudad_destino', 'cod_ciudad');
    }
}
