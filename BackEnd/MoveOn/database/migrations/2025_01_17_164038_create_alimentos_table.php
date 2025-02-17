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
        Schema::create('alimento', function (Blueprint $table) {
            $table->id('id_alimento');
            $table->string('nombre', 100);
            $table->enum('categoria', ['Proteínas', 'Carbohidratos', 'Grasas', 'Vitaminas']);
            $table->string('imagen_url', 255)->nullable();
            $table->text('descripcion')->nullable();
            $table->decimal('peso_kg', 5, 2)->nullable();
            $table->decimal('precio_euros', 5, 2)->nullable();
            $table->string('codigo_barras', 50)->nullable();
            $table->decimal('calorias', 5, 2)->nullable();
            $table->decimal('proteinas', 5, 2)->nullable();
            $table->decimal('grasas', 5, 2)->nullable();
            $table->decimal('carbohidratos', 5, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alimentos');
    }
};
