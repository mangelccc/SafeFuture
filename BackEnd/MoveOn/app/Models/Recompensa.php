<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Recompensa extends Model
{
    /** @use HasFactory<\Database\Factories\RecompensaFactory> */
    use HasFactory;

    public function usuarios(): BelongsTo
    {
        return $this->belongsTo(Usuario::class);
    }
}
