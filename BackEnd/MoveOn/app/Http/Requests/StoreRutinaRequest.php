<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRutinaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'uuid' => 'required|string|size:36|unique:rutina,uuid',
            'uuid_usuario' => 'required|string|size:36|unique:rutina,uuid_usuario',
            'nombre' => 'required|string|max:100',
            'descripcion' => 'nullable|string'
        ];
    }

}
