<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePaisRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'latitud'      => 'sometimes|numeric|between:-90,90',
            'longitud'     => 'sometimes|numeric|between:-180,180',
            'nombre'       => 'sometimes|string|max:100',
            'descripcion'  => 'sometimes|string',
        ];
    }
}
