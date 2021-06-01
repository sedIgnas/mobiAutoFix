<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VehicleModel;
use Illuminate\Http\Request;

class VehicleModelController extends Controller
{

    public function index()
    {
        $vehicleModels = VehicleModel::get();
        return view('admin.vehicles.models.index', compact('vehicleModels'));
    }

    public function create()
    {
        return $this->edit(new VehicleModel());
    }

    public function store(Request $request)
    {
        return $this->update($request, new VehicleModel());
    }

    public function show($id)
    {
        //
    }

    public function edit(VehicleModel $vehicleModel)
    {
        $model = $vehicleModel;
        return view('admin.vehicles.models.edit', compact('model'));
    }

    public function update(Request $request, VehicleModel $vehicleModel)
    {
        $vehicleModel->fill($request->all())->save();
        return redirect()->route('admin.vehiclemodel.index');
    }

    public function destroy(Request $request, VehicleModel $vehicleModel)
    {

    }
}
