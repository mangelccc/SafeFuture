<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ciudad extends Model
{
    use HasFactory;

    protected $table = 'ciudad';
    protected $primaryKey = 'cod_ciudad';
    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = [
        'nombre',
        'cod_pais'
    ];


}
