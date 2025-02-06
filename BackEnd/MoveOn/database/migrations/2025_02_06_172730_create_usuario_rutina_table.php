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
        Schema::create('usuario_rutina', function (Blueprint $table) {
            $table->id('id_usuario_rutina');
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('id_rutina');
            $table->date('fecha_inicio');
            $table->date('fecha_fin')->nullable();
            $table->foreign('id_usuario')->references('id_usuario')->on('usuario');
            $table->foreign('id_rutina')->references('id_rutina')->on('rutina');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuario_rutina');
    }
};
