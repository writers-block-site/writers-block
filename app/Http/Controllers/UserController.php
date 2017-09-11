<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('ajax');
    }
    
    public function userPage(Request $request)
    {
        if (Auth::check())
        {
            if (Auth::id() == $request->id)
            {
                $user = User::with('docs')->with('comments')->findOrfail(Auth::id());
                $data['user'] = $user;
                $data['profileMatch'] = true;
                return response()->json($data);
            }
            else
            {
                $user = User::with('docs')->with('comments')->findOrfail($request->id);
                $data['user'] = $user;
                $data['profileMatch'] = false;
                return response()->json($data);
            }
        }else
        {
            $user = User::with('docs')->with('comments')->findOrfail($request->id);
            $data['user'] = $user;
            $data['profileMatch'] = false;
            return response()->json($data);
        }
    }
}
