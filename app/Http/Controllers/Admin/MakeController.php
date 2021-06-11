<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Make;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class MakeController extends Controller
{
    /**
     * @return Application|Factory|View
     */
    public function index()
    {
        $makes = Make::get();
        return view('admin.vehicles.makes.index', compact('makes'));
    }

    /**
     * @return Application|Factory|View
     */
    public function create(): View
    {
        return $this->edit(new Make());
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        return $this->update($request, new Make());
    }

    /**
     * @param Make $make
     * @return Application|Factory|View
     */
    public function edit(Make $make): View
    {
        $model = $make;
        return view('admin.vehicles.makes.edit', compact('model'));
    }

    /**
     * @param Request $request
     * @param Make $make
     * @return RedirectResponse
     */
    public function update(Request $request, Make $make): RedirectResponse
    {
        $make->fill($request->all())->save();
        return redirect()->route('admin.make.index');
    }
}
