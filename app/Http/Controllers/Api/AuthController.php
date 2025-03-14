<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        return $this->authService->login($data);
    }
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        unset($data['password_confirmation']);
        return $this->authService->signup($data);
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }
}
