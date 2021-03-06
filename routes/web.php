<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\JobController;
use App\Http\Controllers\Admin\MakeController;
use App\Http\Controllers\Admin\VehicleModelController;
use App\Http\Controllers\Admin\ToolController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\VehicleController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('front.index');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/user-logout', [App\Http\Controllers\HomeController::class, 'userLogout'])->name('user-logout');

Route::prefix('admin')
    ->middleware('admin')
    ->name('admin.')->group(function(){
        Route::get('/', [HomeController::class, 'index'])->name('home');
        Route::resource('users',UserController::class);
        Route::resource('vehicles',VehicleController::class);
        Route::resource('tools',ToolController::class);
        Route::resource('categories',CategoryController::class);
        Route::resource('jobs',JobController::class);
        Route::resource('make',MakeController::class);
        Route::resource('vehiclemodel',VehicleModelController::class);
    });
