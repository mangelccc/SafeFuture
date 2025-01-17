<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Rutina extends Model
{
    /** @use HasFactory<\Database\Factories\RutinaFactory> */
    use HasFactory;
    public function habitos():HasMany
    {
        return $this->hasMany(Habito::class);
    }
}
