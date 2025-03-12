<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        if (Auth::attempt($data) === false) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken("main")->plainTextToken;
        return response()->json([
            'message' => 'Logged in successfully',
            'user' => $user,
            'token' => $token,
        ]);
    }
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        $token = $user->createToken("main")->plainTextToken;
        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
            'token' => $token,
        ]);
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }
}
