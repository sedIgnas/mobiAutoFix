<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Make;
use App\Models\Vehicle;
use App\Models\VehicleModel;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class VehicleController extends Controller
{

    public function index()
    {
        $makesModels = Vehicle::with('make', 'model', 'category')->get();
        $vehicles = Vehicle::get();
        return view('admin.vehicles.index', compact('vehicles', 'makesModels'));
    }


    /**
     * @return Application|Factory|View
     */
    public function create(): View
    {
        return $this->edit(new Vehicle());
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        return $this->update($request, new Vehicle());
    }

    /**
     * @param Vehicle $vehicle
     * @return Application|Factory|View
     */
    public function edit(Vehicle $vehicle): View
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
