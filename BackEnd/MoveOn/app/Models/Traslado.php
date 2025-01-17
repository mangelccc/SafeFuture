<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Traslado extends Model
{
    /** @use HasFactory<\Database\Factories\TrasladoFactory> */
    use HasFactory;

    public function ciudad():HasMany
    {
        return $this->hasMany(Ciudad::class);
    }

    public function usuarios(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }
}
