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
            $table->unsignedBigInteger('id_alimento');
            $table->string('id_dieta');
            $table->primary(['id_alimento', 'id_dieta']);
            $table->float('cantidad');
            $table->timestamps();

            $table->foreign('id_alimento')
                ->references('id_alimento')
                ->on('alimento')
                ->onDelete('cascade');

            $table->foreign('id_dieta')
                ->references('id_dieta')
                ->on('dieta')
                ->onDelete('cascade');
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alimento_dieta');
    }

};
