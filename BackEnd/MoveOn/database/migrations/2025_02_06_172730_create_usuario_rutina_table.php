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
            $table->date('fecha_inicio');
            $table->date('fecha_fin')->nullable();

            // Aquí creas las columnas que referencian a otras tablas
            $table->unsignedBigInteger('id_usuario');
            $table->unsignedBigInteger('id_rutina');

            // Definición de llaves foráneas
            $table->foreign('id_usuario')
                ->references('id_usuario')->on('usuarios')
                ->onDelete('cascade');

            // Si tu tabla se llama 'rutina'
            $table->foreign('id_rutina')
                ->references('id_rutina')->on('rutina')
                ->onDelete('cascade');

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
