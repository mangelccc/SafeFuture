<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAlimentoRequest extends FormRequest
{
    /**
     * Determina si el usuario está autorizado para realizar esta solicitud.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Reglas de validación para crear un alimento.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'nombre'         => 'required|string|max:100',
            'categoria'      => 'required|in:Proteínas,Carbohidratos,Grasas,Vitaminas',
            'imagen_url'     => 'nullable|url',
            'descripcion'    => 'nullable|string',
            'peso_kg'        => 'nullable|numeric',
            'precio_euros'   => 'nullable|numeric',
            'codigo_barras'  => 'nullable|string|max:50',
            'calorias'       => 'nullable|numeric',
            'proteinas'      => 'nullable|numeric',
            'grasas'         => 'nullable|numeric',
            'carbohidratos'  => 'nullable|numeric',
        ];
    }
}
