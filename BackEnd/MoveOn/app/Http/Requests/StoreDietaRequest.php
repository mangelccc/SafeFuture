<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDietaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'id_dieta' => 'required|unique:dieta,id_dieta',
            'nombre'      => 'required|string|max:100',
            'descripcion' => 'nullable|string',
        ];
    }
}
