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
        Schema::create('ciudad', function (Blueprint $table) {
            $table->id('cod_ciudad');
            $table->string('nombre', 100);
            $table->unsignedBigInteger('cod_pais'); // Debe coincidir con el tipo de dato de 'pais.cod_pais'
            $table->foreign('cod_pais')->references('cod_pais')->on('pais')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ciudads');
    }
};
