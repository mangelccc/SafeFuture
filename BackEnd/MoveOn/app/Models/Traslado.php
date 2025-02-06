<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Traslado extends Model
{
    use HasFactory;
    protected $table = 'traslado';
    protected $primaryKey = 'id_traslado';

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario');
    }

    public function ciudadOrigen()
    {
        return $this->belongsTo(Ciudad::class, 'cod_ciudad_origen');
    }

    public function ciudadDestino()
    {
        return $this->belongsTo(Ciudad::class, 'cod_ciudad_destino');
    }
}
