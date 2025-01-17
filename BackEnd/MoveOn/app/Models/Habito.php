<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Habito extends Model
{
    /** @use HasFactory<\Database\Factories\HabitoFactory> */
    use HasFactory;
    public function rutina(): BelongsTo
    {
        return $this->belongsTo(Rutina::class);
    }
}
