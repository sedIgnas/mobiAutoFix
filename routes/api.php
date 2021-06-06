<?php

use App\Http\Controllers\Api\V1\ApiJobsController;
use App\Http\Controllers\Api\V1\ApiUsersController;
use App\Http\Controllers\Api\V1\ApiVehiclesController;
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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('/')->name('api.')->group(function () {
    Route::prefix('jobs')->name('jobs.')->group(function () {
        Route::get('/', [ApiJobsController::class, 'index']);
        Route::get('{id}', [ApiJobsController::class, 'show']);
    });

    Route::prefix('users')->name('users.')->group(function () {
        Route::get('/', [ApiUsersController::class, 'index']);
        Route::get('{id}', [ApiUsersController::class, 'show']);
    });

    Route::prefix('vehicles')->name('vehicles.')->group(function () {
        Route::get('/', [ApiVehiclesController::class, 'index']);
        Route::get('{id}', [ApiVehiclesController::class, 'show']);
    });


});


