<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\User;
use App\Models\Vehicle;
use http\Client\Response;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class JobController extends Controller
{
    public function index()
    {
//           $currentUser = Auth::user();
//        return $currentUser->id;
        $jobs = Job::get();
        $jobsWithUsers = Job::with('user');
        return view('admin.jobs.index', compact('jobs', 'jobsWithUsers'));
    }



    public function create()
    {
        return $this->edit(new Job());
    }


    public function store(Request $request)
    {
        return $this->update($request, new Job());
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
     * @param Job $job
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|View
     */
    public function edit(Job $job): View
    {
        $model = $job;
        $users = User::get();
        $currentUser = Auth::user();
        $vehicles = Vehicle::get();
        return view('admin.jobs.edit', compact('model', 'users', 'vehicles', 'currentUser'));
    }



    public function update(Request $request, Job $job)
    {
        $job->createJob($request);
        return redirect()->route('admin.jobs.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
