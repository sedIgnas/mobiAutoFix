<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ApiVehiclesController extends Controller
{
    public function index()
    {
        return response(Vehicle::with('make', 'model', 'category')->get());
    }

    /**
     * @param $id
     * @return Response
     */
    public function vehicleMakeModel($id): Response {
        return response(Vehicle::with('make', 'model', 'category')->where('id', $id)->get());
    }


    public function show($id)
    {
//        return VehicleResource::collection()

        $vehicle = Vehicle::with('make', 'model')->where('id', $id)->first();

        if(!$vehicle){
            return response(['status' => 404, 'message'=>'vehicle not found']);
        }

        return response($vehicle);
    }

    public function store(Request $request)
    {
        return Vehicle::create($request->all());
    }
}
