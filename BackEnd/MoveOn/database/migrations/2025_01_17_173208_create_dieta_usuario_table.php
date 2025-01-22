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
        Schema::create('dieta_usuario', function (Blueprint $table) {
            $table->foreignId('dieta_id')->constrained()->onDelete('cascade'); // Agrega onDelete si aplica
            $table->foreignId('usuario_id')->constrained()->onDelete('cascade');
            $table->primary(['dieta_id', 'usuario_id']); // Clave primaria compuesta
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
        Schema::dropIfExists('dieta_usuario');
    }
};
