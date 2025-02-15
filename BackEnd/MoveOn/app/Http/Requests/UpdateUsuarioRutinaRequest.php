<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUsuarioRutinaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'id_usuario'  => 'required|exists:usuarios,id_usuario',
            'id_rutina'   => 'required|exists:rutinas,id_rutina',
            'fecha_inicio'=> 'required|date',
            'fecha_fin'   => 'nullable|date',
        ];
    }
}
