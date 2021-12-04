<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string("judul");
            $table->text("short_description");
            $table->string("tag");
            $table->text("content");
            $table->string("slug");
            $table->string("thumbnail");
            $table->string("meta_title")->nullable();
            $table->text("meta_description")->nullable();
            $table->timestamps();
        });
    }

    /**
     *->nullable() Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blogs');
    }
}
