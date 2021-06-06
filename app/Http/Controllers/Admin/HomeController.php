<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\Make;
use App\Models\User;
use App\Models\Vehicle;
use App\Models\VehicleModel;
use Illuminate\Http\Request;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function index()
    {
        $vehicles = Vehicle::get();
        $makes = Make::get();
        $models = VehicleModel::get();
        $users = User::get();
        $jobs = Job::get();

        $vehicleCount = count($vehicles);
        $makeCount = count($makes);
        $modelCount = count($models);
        $userCount = count($users);
        $jobCount = count($jobs);

        return view('admin.home', compact(
            'vehicleCount',
            'makeCount',
            'modelCount',
            'userCount',
            'jobCount'
        ));
    }


}
