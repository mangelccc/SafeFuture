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
        Schema::create('usuario_dieta', function (Blueprint $table) {
            $table->id('id_usuario_dieta');
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('id_dieta');
            $table->decimal('peso_usuario', 5, 2)->nullable();
            $table->decimal('altura_usuario', 5, 2)->nullable();
            $table->enum('actividad_fisica', ['Sedentario', 'Ligero', 'Moderado', 'Activo', 'Muy-activo']);
            $table->enum('objetivo', ['Perder', 'Mantener', 'Ganar']);
            $table->enum('estado', ['Activa', 'Finalizada']);
            $table->foreign('id_usuario')->references('id_usuario')->on('usuario');
            $table->foreign('id_dieta')->references('id_dieta')->on('dieta');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuario_dieta');
    }
};
