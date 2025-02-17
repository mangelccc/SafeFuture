<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEjercicioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nombre'         => 'required|string|max:100',
            'descripcion'    => 'nullable|string',
            'imagen_url'     => 'nullable|url',
            'video_url'      => 'nullable|url',
            'grupo_muscular' => 'nullable|string|max:100',
        ];
    }
}
