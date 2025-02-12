<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('traslado', function (Blueprint $table) {
            $table->id('id_traslado');
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('cod_ciudad_origen');
            $table->unsignedBigInteger('cod_ciudad_destino');
            $table->date('fecha_solicitud');
            $table->foreign('id_usuario')->references('id_usuario')->on('usuario');
            $table->foreign('cod_ciudad_origen')->references('cod_ciudad')->on('ciudad');
            $table->foreign('cod_ciudad_destino')->references('cod_ciudad')->on('ciudad');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('traslados');
    }
};
