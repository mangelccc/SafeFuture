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
            $table->uuid('uuid', 36)->unique();
            $table->string('aeropuerto_salida', 3);
            $table->string('aeropuerto_llegada', 3);
            $table->string('fecha_salida', 100);
            $table->string('estado', 100);
            $table->string('codigo', 100);
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
