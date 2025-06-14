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
        Schema::create('rutina', function (Blueprint $table) {
            $table->id('id_rutina');
            $table->string('uuid', 36)->unique();
            $table->string('uuid_usuario', 36);
            $table->string('nombre', 100);
            $table->text('descripcion')->nullable();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rutinas');
    }
};
