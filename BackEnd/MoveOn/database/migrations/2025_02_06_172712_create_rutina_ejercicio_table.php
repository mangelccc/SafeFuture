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
        Schema::create('rutina_ejercicio', function (Blueprint $table) {
            $table->id('id_rutina_ejercicio');
            $table->unsignedBigInteger('id_rutina');
            $table->unsignedBigInteger('id_ejercicio');
            $table->Integer('num_series');
            $table->Integer('num_repeticiones');
            $table->foreign('id_rutina')->references('id_rutina')->on('rutina');
            $table->foreign('id_ejercicio')->references('id_ejercicio')->on('ejercicio');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rutina_ejercicio');
    }
};
