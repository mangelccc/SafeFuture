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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('dni', 20)->unique();
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('email')->unique();
            $table->string('password'); // Contraseña encriptada
            $table->string('direccion');
            $table->date('fecha_nacimiento'); // Cambiado a tipo 'date'
            $table->foreignId('recompensa_id')->constrained();
            $table->foreignId('mensaje_id')->constrained();
            $table->foreignId('traslado_id')->constrained();
            $table->foreignId('rol_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
