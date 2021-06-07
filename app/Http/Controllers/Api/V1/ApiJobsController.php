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

        return response(Job::with('user')->get());   // su relationu
//        return JobResource::collection(Job::all());  // su resursu, be relation
    }


    public function show($id)
    {

        return JobResource::collection(Job::all());
//        $job = Job::with('user')->where('id',$id)->first();
//
//        if(!$job){
//            return response(['status' => 404, 'message'=>'job not found']);
//        }
//
//        return response($job);
    }
}
