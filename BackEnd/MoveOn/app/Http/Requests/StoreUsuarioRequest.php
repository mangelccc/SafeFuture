<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUsuarioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nombre'     => 'required|string|max:100',
            'correo'     => 'required|email|max:100|unique:usuario,correo',
            'contrasena' => 'required|string|min:8|max:100',
            'edad'       => 'required|integer',
            'sexo'       => 'required|in:hombre,mujer',
            'rol'        => 'required|in:Usuario,Moderador,Administrador',
        ];
    }
}
