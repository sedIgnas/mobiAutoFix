<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Job;
use http\Client\Response;
use Illuminate\Http\Request;

class ApiJobsController extends Controller
{

    public function index()
    {
        return response(Job::with('user')->get());
    }


    public function show($id)
    {
        $job = Job::with('user')->where('id',$id)->first();

        if(!$job){
            return response(['status' => 404, 'message'=>'job not found']);
        }

        return response($job);
    }
}
