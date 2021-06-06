<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class ApiVehiclesController extends Controller
{
    public function index()
    {
        return response(Vehicle::get());
    }


    public function show($id)
    {
        $vehicle = Vehicle::with('make', 'model')->where('id', $id)->first();

        if(!$vehicle){
            return response(['status' => 404, 'message'=>'vehicle not found']);
        }

        return response($vehicle);
    }
}
