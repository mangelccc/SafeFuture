<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use App\Models\Traslado;

class TrasladoSeeder extends Seeder
{
    public function run()
    {
        // API settings
        /*$accessKey = '39cf4f04d8f8f9b1f9ec4c817e4a209c';
        $origins = ['ALC', 'MAD', 'VLC']; // Todos los orígenes
        $destinations = ['ZRH', 'DUB', 'SYD']; // Destinos clave
        $limit = 100;
        $flightDate = Carbon::today()->toDateString(); // Fecha de hoy

        Log::info("Iniciando TrasladoSeeder - Filtering flights for date={$flightDate}");

        foreach ($origins as $dep) {
            foreach ($destinations as $arr) {
                $offset = 0;
                $page = 1;

                do {
                    Log::info("Request #{$page} para {$dep} -> {$arr}, offset={$offset}");

                    try {
                        // Fetch flights without date filter, then we'll filter in PHP
                        $response = Http::timeout(10)->get('https://api.aviationstack.com/v1/flights', [
                            'access_key' => $accessKey,
                            'dep_iata'   => $dep,
                            'arr_iata'   => $arr,
                            'limit'      => $limit,
                            'offset'     => $offset,
                        ]);

                        if ($response->failed()) {
                            throw new \Exception("HTTP {$response->status()}: {$response->body()}");
                        }

                        $json = $response->json();
                        $data = data_get($json, 'data', []);
                        $count = count($data);
                        $total = data_get($json, 'pagination.total', null);

                        Log::info("Recibidos {$count} vuelos (total disponible: {$total})");

                        foreach ($data as $flight) {
                            // Filtrar por fecha de hoy en PHP
                            if (($flight['flight_date'] ?? '') !== $flightDate) {
                                continue;
                            }

                            // Crear o actualizar registro
                            $created = Traslado::firstOrCreate([
                                'aeropuerto_salida'  => $flight['departure']['iata'] ?? null,
                                'aeropuerto_llegada' => $flight['arrival']['iata']   ?? null,
                                'fecha_salida'       => $flight['flight_date']       ?? null,
                                'estado'             => $flight['flight_status']     ?? null,
                                'codigo'             => $flight['flight']['icao']    ?? null,
                            ], [
                                'uuid' => Str::uuid(),
                            ]);

                            Log::debug(
                                $created->wasRecentlyCreated
                                    ? "Insertado vuelo: {$created->codigo}"
                                    : "Ya existe vuelo: {$created->codigo}"
                            );
                        }

                        $offset += $limit;
                        $page++;

                        // Evitar rate limits
                        usleep(200_000);

                    } catch (\Exception $e) {
                        Log::error("Error en Seeder para {$dep}->{$arr} (offset {$offset}): " . $e->getMessage());
                        break;
                    }
                } while ($count === $limit);
            }
        }

        Log::info('TrasladoSeeder pruebas finalizado.');*/
    }
}
