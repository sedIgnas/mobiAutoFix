<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VehicleModel;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
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

    /**
     * @param VehicleModel $vehicleModel
     * @return Application|Factory|View
     */
    public function edit(VehicleModel $vehicleModel): View
    {
        $model = $vehicleModel;
        return view('admin.vehicles.models.edit', compact('model'));
    }

    /**
     * @param Request $request
     * @param VehicleModel $vehicleModel
     * @return RedirectResponse
     */
    public function update(Request $request, VehicleModel $vehicleModel): RedirectResponse
    {
        $vehicleModel->fill($request->all())->save();
        return redirect()->route('admin.vehiclemodel.index');
    }

}
