<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class VerifyRecaptcha
{
    public function handle(Request $request, Closure $next)
    {
        $recaptchaResponse = $request->input('recaptcha_token');

        if (!$recaptchaResponse) {
            return response()->json(['error' => 'reCAPTCHA token is required'], 400);
        }

        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret'   => env('RECAPTCHA_SECRET_KEY'),
            'response' => $recaptchaResponse,
        ]);

        $responseBody = $response->json();

        if (!$responseBody['success']) {
            return response()->json(['error' => 'reCAPTCHA verification failed'], 400);
        }

        return $next($request);
    }
}
