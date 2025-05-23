<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCoordenadaRequest;
use App\Http\Requests\UpdateCoordenadaRequest;
use App\Models\Coordenada;
use Illuminate\Http\Request;

class CoordenadaController extends Controller
{
    public function index()
    {
        $coords = Coordenada::all();
        return response()->json(['coordenadas' => $coords, 'estado' => 200], 200);
    }

    public function store(StoreCoordenadaRequest $request)
    {
        $coord = Coordenada::create($request->validated());
        return response()->json(['mensaje' => 'Coordenada creada', 'coordenada' => $coord, 'estado' => 201], 201);
    }

    public function show($id)
    {
        $coord = Coordenada::find($id);
        if (!$coord) {
            return response()->json(['mensaje' => 'No encontrada', 'estado' => 404], 404);
        }
        return response()->json(['coordenada' => $coord, 'estado' => 200], 200);
    }

    public function update(UpdateCoordenadaRequest $request, $id)
    {
        $coord = Coordenada::find($id);
        if (!$coord) {
            return response()->json(['mensaje' => 'No encontrada', 'estado' => 404], 404);
        }
        $coord->update($request->validated());
        return response()->json(['mensaje' => 'Coordenada actualizada', 'coordenada' => $coord, 'estado' => 200], 200);
    }

    public function destroy($id)
    {
        $coord = Coordenada::find($id);
        if (!$coord) {
            return response()->json(['mensaje' => 'No encontrada', 'estado' => 404], 404);
        }
        $coord->delete();
        return response()->json(['mensaje' => 'Coordenada eliminada', 'estado' => 200], 200);
    }
}
