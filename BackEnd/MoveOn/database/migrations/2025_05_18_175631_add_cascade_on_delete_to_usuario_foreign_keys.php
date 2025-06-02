<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCascadeOnDeleteToUsuarioForeignKeys extends Migration
{
    public function up()
    {
        // Tabla pivot rutina–usuario
        //Schema::table('usuario_rutina', function (Blueprint $table) {
        //    // 1) Suelta la FK vieja
        //    $table->dropForeign(['id_usuario']);
        //    // 2) La vuelve a crear con cascade
        //    $table->foreign('id_usuario')
        //          ->references('id_usuario')
        //          ->on('usuario')
        //          ->onDelete('cascade');
        //});

        // Tabla pivot dieta–usuario
        Schema::table('usuario_dieta', function (Blueprint $table) {
            $table->dropForeign(['id_usuario']);
            $table->foreign('id_usuario')
                  ->references('id_usuario')
                  ->on('usuario')
                  ->onDelete('cascade');
        });


        // Tabla intentos no fumar
        Schema::table('no_fumar', function (Blueprint $table) {
            $table->dropForeign(['id_usuario']);
            $table->foreign('id_usuario')
                  ->references('id_usuario')
                  ->on('usuario')
                  ->onDelete('cascade');
        });

    }

    public function down()
    {
        // En down() deberías devolverlas a su estado original sin cascade,
        // o simplemente volver a soltarlas si no quieres reversión.
    }
}
