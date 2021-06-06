<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Make;
use App\Models\Vehicle;
use App\Models\VehicleModel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;

class VehicleController extends Controller
{

    public function index()
    {
        $makesModels = Vehicle::with('make', 'model', 'category')->get();
        $vehicles = Vehicle::get();
        return view('admin.vehicles.index', compact('vehicles', 'makesModels'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return $this->edit(new Vehicle());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->update($request, new Vehicle());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Vehicle $vehicle)
    {
        $model = $vehicle;
        $makes = Make::get();
        $vehicleModels = VehicleModel::get();
        $categories = Category::get();
        return view('admin.vehicles.edit', compact('model', 'makes', 'vehicleModels', 'categories'));
    }


    /**
     * @param Request $request
     * @param Vehicle $vehicle
     * @return RedirectResponse
     */
    public function update(Request $request, Vehicle $vehicle): RedirectResponse
    {
        $vehicle->fill($request->all())->save();
        return redirect()->route('admin.vehicles.index');
    }

    /**
     * @param Vehicle $vehicle
     * @return RedirectResponse
     */
    public function destroy(Vehicle $vehicle): RedirectResponse
    {
        $vehicle->delete();
        return redirect()->route('admin.vehicles.index')->with('success', 'Vehicle deleted successfully');
    }
}
