@extends('admin.layouts.page')

@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <hr>
            <div class="container">
                <span class="h4">Vehicles</span>
                <div class="row ">
                    <div class="col-4">
                        <div class="card mt-2">
                            <div class="card-header">
                                All vehicles
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Current vehicle count</h5>
                                <p class="card-text h4">{{$vehicleCount}}</p>
                                <a href="{{route('admin.vehicles.create')}}" class="btn btn-primary">Create new
                                    Vehicle</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-header">
                                Vehicle manufacturers only
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Current vehicle manufacturer count</h5>
                                <p class="card-text h4">{{$makeCount}}</p>
                                <a href="{{route('admin.make.create')}}" class="btn btn-primary">Create new
                                    Manufacturer</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-header">
                                Vehicle models only
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Current vehicle model count</h5>
                                <p class="card-text h4">{{$modelCount}}</p>
                                <a href="{{route('admin.vehiclemodel.create')}}" class="btn btn-primary">Create new
                                    Vehicle-model</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="container">

                    <span class="h4">Users and Jobs</span>

                    <div class="row">
                        <div class="col-6">
                            <div class="card">
                                <div class="card-header">
                                    All users
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Current User count</h5>
                                    <p class="card-text h4">{{$userCount}}</p>
                                    <a href="{{route('admin.users.create')}}" class="btn btn-primary">Create new
                                        User</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <div class="card-header">
                                    All jobs
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Current Job count</h5>
                                    <p class="card-text h4">{{$jobCount}}</p>
                                    <a href="{{route('admin.jobs.create')}}" class="btn btn-primary">Create new Job</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
@endsection
