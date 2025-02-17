<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pais extends Model
{
    use HasFactory;

    protected $table = 'pais';
    protected $primaryKey = 'cod_pais';
    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = [
        'nombre'
    ];

    // Relaciones
    public function ciudades()
    {
        return $this->hasMany(Ciudad::class, 'cod_pais', 'cod_pais');
    }
}
