<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Usuario extends Model
{

    use HasFactory;
    protected $table = 'usuarios';

    protected $fillable = [
        'dni',
        'nombre',
        'apellidos',
        'email',
        'password',
        'direccion',
        'fecha_nacimiento',
    ];

    public function dieta(): BelongsToMany
    {
        return $this->belongsToMany(Dieta::class)
            ->withTimestamps()
            ->withPivot(['fecha_inicio', 'fecha_fin']);
    }

    public function recompensa():HasMany
    {
        return $this->hasMany(Recompensa::class);
    }
    public function mensaje():HasMany
    {
        return $this->hasMany(Mensaje::class);
    }
    public function traslado():HasMany
    {
        return $this->hasMany(Traslado::class);
    }
}
