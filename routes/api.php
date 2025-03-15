<?php

use App\Http\Middleware\VerifyRecaptcha;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/get', function () {
    return response()->json([
        'message' => 'Hello World!',
    ]);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

Route::post('/signup', [App\Http\Controllers\Api\AuthController::class, 'signup'])->middleware(VerifyRecaptcha::class);
Route::post('/login', [App\Http\Controllers\Api\AuthController::class, 'login'])->middleware(VerifyRecaptcha::class);
