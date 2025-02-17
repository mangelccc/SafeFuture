<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTrasladoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'id_usuario'         => 'required|exists:usuario,id_usuario',
            'cod_ciudad_origen'  => 'required|exists:ciudad,cod_ciudad',
            'cod_ciudad_destino' => 'required|exists:ciudad,cod_ciudad',
            'fecha_solicitud'    => 'required|date',
        ];
    }
}
