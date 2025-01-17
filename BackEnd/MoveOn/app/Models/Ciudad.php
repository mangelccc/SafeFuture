<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ciudad extends Model
{
    /** @use HasFactory<\Database\Factories\CiudadFactory> */
    use HasFactory;

    public function traslado(): BelongsTo
    {
        return $this->belongsTo(Traslado::class);
    }
    public function paises():HasMany
    {
        return $this->hasMany(Pais::class);
    }
}
