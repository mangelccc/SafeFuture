<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Dieta extends Model
{
    use HasFactory;

    // Nombre de la tabla (opcional si sigue la convención de nombres)
    protected $table = 'dietas';

    // Atributos que se pueden asignar masivamente
    protected $fillable = [
        'nombre',
        'detalles',
    ];

    // Castear el campo 'detalles' como JSON para manejarlo como un array
    protected $casts = [
        'detalles' => 'array',
    ];

    /**
     * Relación muchos a muchos con el modelo Usuario.
     */
    public function usuarios(): BelongsToMany
    {
        return $this->belongsToMany(Usuario::class)
            ->withTimestamps()
            ->withPivot(['fecha_inicio', 'fecha_fin']); // Campos adicionales en la tabla pivote
    }
}
