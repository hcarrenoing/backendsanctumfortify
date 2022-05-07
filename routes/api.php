<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use  App\Http\Controllers\AuthController;

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
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::get('get-auth-user',[AuthController::class,'get_auth_user']);

Route::post('sid-login',[AuthController::class,'login']);
Route::post('sid-registro',[AuthController::class,'register'])->middleware('auth:sanctum');

Route::get('/forgot-password', function () {
    return view('auth.forgot-password');
})->middleware('guest')->name('password.request');

Route::post('sid-forgot-password',[AuthController::class,'forgotPassword'])->middleware('guest')->name('password.email');

/*Route::get('/reset-password/{token}', function ($token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');
*/
//Route::post('/reset-password',[AuthController::class,'resetPassword'])->middleware('guest')->name('password.update');
Route::post('/reset-password',[AuthController::class,'resetPassword'])->middleware('guest')->name('reset-password');
Route::post('sid-salir',[AuthController::class,'cerrarDestroy'])->middleware('auth:sanctum');
