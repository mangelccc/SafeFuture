<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRutinaEjercicioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'id_rutina'        => 'required|exists:rutina,id_rutina',
            'id_ejercicio'     => 'required|exists:ejercicio,id_ejercicio',
            'num_series'       => 'required|integer',
            'num_repeticiones' => 'required|integer',
        ];
    }
}
