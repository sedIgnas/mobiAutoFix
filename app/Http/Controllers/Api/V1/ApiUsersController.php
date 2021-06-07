<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class ApiUsersController extends Controller
{
    public function index()
    {
        return response(User::with('role', 'city')->get());  //visi duomenys, bet su relationais
//        return UserResource::collection($users); // duomenys pro resursa, bet galiu tik visus
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
