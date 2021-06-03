<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VehicleModel;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class VehicleModelController extends Controller
{

    /**
     * @return View
     */
    public function index(): View
    {
        $vehicleModels = VehicleModel::get();
        return view('admin.vehicles.models.index', compact('vehicleModels'));
    }

    /**
     * @return View
     */
    public function create(): View
    {
        return $this->edit(new VehicleModel());
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
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
