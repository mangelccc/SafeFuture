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
        Schema::create('alimento_dieta', function (Blueprint $table) {
            $table->foreignId('alimento_id')->constrained();
            $table->foreignId('dieta_id')->constrained();
            $table->primary(['alimento_id', 'dieta_id']);
            $table->float('cantidad');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

    }
};
