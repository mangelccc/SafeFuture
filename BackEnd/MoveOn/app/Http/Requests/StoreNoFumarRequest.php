<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNoFumarRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'id_usuario' => 'required|uuid|exists:usuario,id_usuario',
            'quit_date'  => 'required|date|before_or_equal:now',
            'status'     => 'sometimes|in:activo,recaida',
        ];
    }
}
