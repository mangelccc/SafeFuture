<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AlimentoDieta extends Model
{
    use HasFactory;

    protected $table = 'alimento_dieta';
    public $timestamps = true;

    protected $primaryKey = null; // Al ser tabla pivote compuesta, no usamos un PK autoincrementable
    public $incrementing = false;

    protected $fillable = [
        'id_alimento',
        'id_dieta',
        'cantidad'
    ];

    public function alimento()
        {
            return $this->belongsTo(Alimento::class, 'id_alimento', 'id_alimento');
        }

        // (Opcional) relación hacia Dieta
        public function dieta()
        {
            return $this->belongsTo(Dieta::class, 'id_dieta', 'id_dieta');
        }
}
