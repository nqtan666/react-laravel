<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UserRepositoryInterface;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function signup(array $data)
    {
        /** @var User $user */
        $user = $this->userRepository->create($data);
        $token = $user->createToken("main")->plainTextToken;
        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function login(array $data)
    {
        if (Auth::attempt($data) === false) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 422);
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
}
