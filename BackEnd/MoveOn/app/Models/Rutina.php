<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Rutina extends Model
{
    use HasFactory;
    protected $table = 'rutinas';

    protected $fillable = [
        'nombre',
        'detalles',
    ];

    protected $casts = [
        'detalles' => 'array', // Laravel lo convierte automáticamente a un array
    ];

    public function usuarios(): BelongsToMany
    {
        return $this->belongsToMany(Usuario::class)->withTimestamps()->withPivot(["fecha_inicio", "fecha_fin"]);
    }
}
