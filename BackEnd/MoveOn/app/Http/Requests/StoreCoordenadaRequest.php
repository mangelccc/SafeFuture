<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCoordenadaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'usuario_uuid'  => 'required|uuid|exists:usuario,id_usuario',
            'latitud'       => 'required|numeric|between:-90,90',
            'longitud'      => 'required|numeric|between:-180,180',
            'nombre'        => 'required|string|max:100',
            'descripcion'   => 'nullable|string',
        ];
    }
}
