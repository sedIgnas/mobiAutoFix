<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobResource;
use App\Models\Job;
use http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiJobsController extends Controller
{

    public function index()
    {

        return response(Job::with('user', 'vehicle')->get());   // su relationu
//        return JobResource::collection(Job::all());  // su resursu, be relation
    }


    public function show($id)
    {
        return Job::where('id', $id)->get();
    }


    public function store(Request $request)
    {

        $job = new Job;
        $job->createJob($request);
        $job->save();
    }
}
