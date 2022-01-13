<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        return response()->json(["foo" => "bar"]);
    }
}
