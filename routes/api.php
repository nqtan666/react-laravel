<?php

use Illuminate\Support\Facades\Route;

Route::get('/get', function () {
    return response()->json([
        'message' => 'Hello World!',
    ]);
});

\Illuminate\Support\Facades\Log::info(111111111111111111);
Route::post('/signup', [App\Http\Controllers\Api\AuthController::class, 'signup']);
Route::post('/login', [App\Http\Controllers\Api\AuthController::class, 'login']);
Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);
