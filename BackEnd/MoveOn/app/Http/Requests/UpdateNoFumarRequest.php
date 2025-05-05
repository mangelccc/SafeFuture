<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNoFumarRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'quit_date' => 'sometimes|date|before_or_equal:today',
            'status'    => 'sometimes|in:activo,recaida',
        ];
    }
}
