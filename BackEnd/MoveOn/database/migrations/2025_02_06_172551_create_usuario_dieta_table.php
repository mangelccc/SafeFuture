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
            $table->decimal('peso_usuario', 5, 2)->nullable();
            $table->decimal('altura_usuario', 5, 2)->nullable();
            $table->enum('actividad_fisica', ['Sedentario', 'Ligero', 'Moderado', 'Activo', 'Muy-activo']);
            $table->enum('objetivo', ['Perder', 'Mantener', 'Ganar']);
            $table->enum('estado', ['Activa', 'Finalizada']);
            $table->unsignedBigInteger('usuario_id'); // Añades manualmente la columna de la clave foránea
            $table->foreign('usuario_id')->references('id_usuario')->on('usuarios'); // Referencia explícita a 'id_usuario'
            $table->foreignId('dieta_id')->constrained('dietas');
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
