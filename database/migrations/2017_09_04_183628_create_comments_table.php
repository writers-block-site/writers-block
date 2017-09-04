<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('uploaded_by')->unsigned();
            $table->integer('doc_id')->unsigned();
            $table->text('comment');
            $table->timestamps();
            $table->foreign('uploaded_by')->references('id')->on('users');
            $table->foreign('doc_id')->references('id')->on('docs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
