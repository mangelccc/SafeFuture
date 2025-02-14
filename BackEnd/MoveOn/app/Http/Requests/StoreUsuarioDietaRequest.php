<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUsuarioDietaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'id_usuario'       => 'required|exists:usuario,id_usuario',
            'id_dieta'         => 'required|exists:dieta,id_dieta',
            'peso_usuario'     => 'nullable|numeric',
            'altura_usuario'   => 'nullable|numeric',
            'actividad_fisica' => 'required|in:Sedentario,Ligero,Moderado,Activo,Muy-activo',
            'objetivo'         => 'required|in:Perder,Mantener,Ganar',
            'estado'           => 'required|in:Activa,Finalizada'
        ];
    }
}
