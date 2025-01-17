<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Dieta extends Model
{
    /** @use HasFactory<\Database\Factories\DietaFactory> */
    use HasFactory;


    public function usuarios(): BelongsToMany
    {
        return $this->belongsToMany(Usuario::class)->withTimestamps()->withPivot(["fecha_inicio", "fecha_fin"]);
    }
}
