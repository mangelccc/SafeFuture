<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class NoFumar extends Model
{
    use HasFactory;

    protected $table = 'no_fumar';
    protected \$fillable = [
        'id_usuario',
        'quit_date',
        'status',
    ];

    public function usuario()
    {
        return \$this->belongsTo(Usuario::class, 'id_usuario', 'id_usuario');
    }
}
