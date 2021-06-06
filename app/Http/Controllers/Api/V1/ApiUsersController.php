<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ApiUsersController extends Controller
{
    public function index()
    {
        return response(User::get());
    }


    public function show($id)
    {
        $user = User::get()->where('id',$id)->first();

        if(!$user){
            return response(['status' => 404, 'message'=>'user not found']);
        }

        return response($user);
    }
}
