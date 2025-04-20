<?php

namespace App\Http\Controllers;

use App\Models\AlimentoDieta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AlimentoDietaController extends Controller
{
    public function index()
    {
        $registros = AlimentoDieta::all();
        if ($registros->isEmpty()) {
            return response()->json([
                'message' => 'No hay registros en la relación dieta-alimento',
                'status'  => 200
            ], 200);
        }
        return response()->json([
            'alimento_dietas' => $registros,
            'status'          => 200
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_alimento' => 'required|exists:alimento,id_alimento',
            'id_dieta'    => 'required|exists:dieta,id_dieta',
            'cantidad'    => 'required|numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores de validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }

        $registro = AlimentoDieta::create($request->all());
        if (!$registro) {
            return response()->json([
                'message' => 'Error al crear el registro de dieta-alimento',
                'status'  => 500
            ], 500);
        }
        return response()->json([
            'message'         => 'Registro de dieta-alimento creado',
            'alimento_dieta'  => $registro,
            'status'          => 201
        ], 201);
    }

    public function show($id_alimento, $id_dieta)
    {
        $registro = AlimentoDieta::where('id_alimento', $id_alimento)
            ->where('id_dieta', $id_dieta)
            ->first();

        if (!$registro) {
            return response()->json([
                'message' => 'Registro no encontrado',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'alimento_dieta' => $registro,
            'status'         => 200
        ], 200);
    }

    public function update(Request $request, $id_alimento, $id_dieta)
    {
        $registro = AlimentoDieta::where('id_alimento', $id_alimento)
            ->where('id_dieta', $id_dieta)
            ->first();

        if (!$registro) {
            return response()->json([
                'message' => 'Registro no encontrado',
                'status'  => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'cantidad' => 'required|numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }

        $registro->update($request->only('cantidad'));
        return response()->json([
            'message'         => 'Registro actualizado',
            'alimento_dieta'  => $registro,
            'status'          => 200
        ], 200);
    }

    public function updatePartial(Request $request, $id_alimento, $id_dieta)
    {
        $registro = AlimentoDieta::where('id_alimento', $id_alimento)
            ->where('id_dieta', $id_dieta)
            ->first();

        if (!$registro) {
            return response()->json([
                'message' => 'Registro no encontrado',
                'status'  => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'cantidad' => 'sometimes|numeric|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }

        $registro->update($request->only('cantidad'));
        return response()->json([
            'message'         => 'Registro actualizado parcialmente',
            'alimento_dieta'  => $registro,
            'status'          => 200
        ], 200);
    }

    public function destroy($id_alimento, $id_dieta)
    {
        $registro = AlimentoDieta::where('id_alimento', $id_alimento)
            ->where('id_dieta', $id_dieta)
            ->first();

        if (!$registro) {
            return response()->json([
                'message' => 'Registro no encontrado',
                'status'  => 404
            ], 404);
        }
        $registro->delete();
        return response()->json([
            'message' => 'Registro eliminado',
            'status'  => 200
        ], 200);
    }

    //Funciones definidas por los programadores.

    public function updateMultiples(Request $request)
    {
        // 1) Validar la solicitud
        $validated = $request->validate([
            'id_dieta' => 'required|exists:dieta,id_dieta',
            'alimentos' => 'required|array',
            'alimentos.*.id_alimento' => 'required|exists:alimento,id_alimento',
            'alimentos.*.cantidad' => 'required|numeric|min:1'
        ]);

        $id_dieta       = $validated['id_dieta'];
        $alimentosArray = $validated['alimentos'];
        // Extraemos solo los IDs de alimento que el cliente envía
        $idsAlimentos   = array_column($alimentosArray, 'id_alimento');

        // 2) Preparamos datos para upsert
        $dataUpsert = array_map(function ($alimentoData) use ($id_dieta) {
            return [
                'id_alimento' => $alimentoData['id_alimento'],
                'id_dieta'    => $id_dieta,
                'cantidad'    => $alimentoData['cantidad'],
                'updated_at'  => now(),
                'created_at'  => now(),
            ];
        }, $alimentosArray);

        try {
            \DB::beginTransaction();

            // 3) Eliminar los alimentos que ya no están en el array
            \DB::table('alimento_dieta')
                ->where('id_dieta', $id_dieta)
                ->whereNotIn('id_alimento', $idsAlimentos)
                ->delete();

            // 4) Upsert del resto de alimentos (inserta nuevos o actualiza existentes)
            \DB::table('alimento_dieta')
                ->upsert($dataUpsert, ['id_alimento', 'id_dieta'], ['cantidad', 'updated_at']);

            \DB::commit();

            return response()->json([
                'message' => 'Relación alimento-dieta sincronizada correctamente',
                'status'  => 200,
            ], 200);

        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json([
                'message' => 'Error al sincronizar la relación alimento-dieta',
                'error'   => $e->getMessage(),
                'status'  => 500,
            ], 500);
        }
    }


    //Función definidas por el programador.
    public function getByDieta($id_dieta)
    {
        // Cargamos el pivot junto con cada Alimento relacionado
        $registros = AlimentoDieta::with('alimento')
                        ->where('id_dieta', $id_dieta)
                        ->get();

        if ($registros->isEmpty()) {
            return response()->json([
                'message' => 'No se encontraron registros para esta dieta',
                'status'  => 404
            ], 404);
        }

        // Recorremos cada registro y extraemos los datos del alimento + cantidad + id_dieta
        $alimentos = $registros->map(function ($reg) {
            $a = $reg->alimento;
            return [
                'id_alimento'    => $a->id_alimento,
                'nombre'         => $a->nombre,
                'categoria'      => $a->categoria,
                'imagen_url'     => $a->imagen_url,
                'descripcion'    => $a->descripcion,
                'peso_kg'        => $a->peso_kg,
                'precio_euros'   => $a->precio_euros,
                'codigo_barras'  => $a->codigo_barras,
                'calorias'       => $a->calorias,
                'proteinas'      => $a->proteinas,
                'grasas'         => $a->grasas,
                'carbohidratos'  => $a->carbohidratos,
                'cantidad'       => $reg->cantidad,
                'id_dieta'       => $reg->id_dieta,
            ];
        });

        // Devolver solo el array plano (como tu “Objeto1”)
        return response()->json($alimentos, 200);
    }



}
