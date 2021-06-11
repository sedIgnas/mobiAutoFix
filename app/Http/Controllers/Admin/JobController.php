<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JobController extends Controller
{
    /**
     * @return Application|Factory|View
     */
    public function index(): View
    {
        $jobs = Job::get();
        $jobsWithUsers = Job::with('user');
        return view('admin.jobs.index', compact('jobs', 'jobsWithUsers'));
    }


    /**
     * @return Application|Factory|View
     */
    public function create(): View
    {
        return $this->edit(new Job());
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        return $this->update($request, new Job());
    }


    /**
     * @param Job $job
     * @return Application|Factory|View
     */
    public function edit(Job $job): View
    {
        $model = $job;
        $users = User::get();
        $currentUser = Auth::user();
        $vehicles = Vehicle::get();
        return view('admin.jobs.edit', compact('model', 'users', 'vehicles', 'currentUser'));
    }


    /**
     * @param Request $request
     * @param Job $job
     * @return RedirectResponse
     */
    public function update(Request $request, Job $job): RedirectResponse
    {
        $job->createJob($request);
        return redirect()->route('admin.jobs.index');
    }
}
