<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Dieta extends Model
{
    use HasFactory;
    protected $table = 'dieta';
    protected $primaryKey = 'id_dieta';
}
