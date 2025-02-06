<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuario';
    protected $primaryKey = 'id_usuario';
    protected $fillable = ['nombre', 'correo', 'contrasena', 'edad', 'sexo', 'rol'];

    public function dietas()
    {
        return $this->hasMany(UsuarioDieta::class, 'id_usuario');
    }

    public function rutinas()
    {
        return $this->hasMany(UsuarioRutina::class, 'id_usuario');
    }

    public function traslados()
    {
        return $this->hasMany(Traslado::class, 'id_usuario');
    }
}
