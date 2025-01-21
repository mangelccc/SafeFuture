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
        Schema::create('rutina_usuario', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rutina_id')->constrained();
            $table->foreignId('usuario_id')->constrained();
            $table->primary(['rutina_id', 'usuario_id']);
            $table->date('fecha_inicio');
            $table->date('fecha_fin');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rutina_usuario');
    }
};
