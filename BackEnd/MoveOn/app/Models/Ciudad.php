<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ciudad extends Model
{
    use HasFactory;
    protected $table = 'ciudad';
    protected $primaryKey = 'cod_ciudad';

    public function pais()
    {
        return $this->belongsTo(Pais::class, 'cod_pais');
    }
}
