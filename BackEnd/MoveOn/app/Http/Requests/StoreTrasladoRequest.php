<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTrasladoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'uuid'         => 'required|string|max:36',
            'aeropuerto_salida'  => 'required|string|max:100',
            'aeropuerto_llegada' => 'required|string|max:100',
            'fecha_salida'    => 'required|string|max:100',
            'estado'    => 'required|string|max:100',
            'codigo'    => 'required|string|max:100',
        ];
    }
}
