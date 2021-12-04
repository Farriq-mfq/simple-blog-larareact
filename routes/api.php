<?php

use App\Http\Controllers\Api\v1\AdminController;
use App\Http\Controllers\Api\v1\BlogContoller;
use App\Http\Controllers\Api\v1\frontend\BlogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix'=>"v1"],function (){
    Route::group(['prefix'=>"admin"],function(){
        Route::resource('blog',BlogContoller::class)->middleware('admin');
        Route::get('admin',[AdminController::class,'admin'])->middleware('admin');
        Route::post('login',[AdminController::class,'login']);
    });

    Route::get("blog",[BlogController::class,'getAll']);
});