<?php

use App\Http\Controllers\V1\ProductoController;

use App\Http\Controllers\V1\AuthController;
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

Route::prefix('v1')->group(function () {

    Route::post('login', [AuthController::class, 'authenticate']);
    Route::post('register', [AuthController::class, 'register']);

    Route::get('productos', [ProductoController::class, 'index']);
    Route::get('productos/{id}', [ProductsController::class, 'show']);

    Route::group(['middleware' => ['jwt.verify']], function() {

        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('get-user', [AuthController::class, 'getUser']);

        Route::post('productos', [ProductsController::class, 'store']);
        Route::put('productos/{id}', [ProductsController::class, 'update']);
        Route::delete('productos/{id}', [ProductsController::class, 'destroy']);

    });
});
