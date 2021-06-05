@extends('admin.layouts.page',['content_title'=>trans('Jobs')])

@section('content')
    <?php
        if($model->exists){
            $tableColor = 'primary';
            $action = 'edit';
            $route = route('admin.jobs.update',$model);
        }else{
            $tableColor = 'success';
            $action = 'create';
            $route = route('admin.jobs.store');
        }
    ?>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

                    <div class="card card-{{$tableColor}}">
                        <div class="card-header">
                            <h3 class="card-title">@lang('New entry')</h3>
                        </div>

                        <form action="{{$route}}" method="POST">
                            @if($model->exists)
                                @method('PUT')
                            @endif
                            @csrf()
                            <div class="card-body row">
                                </div>
                                <div class="form-group col-6">
                                    <label for="description">@lang('Description')</label>
                                    <input type="text" class="form-control" name="description" id="description" value= "{{$model->description ?? ''}}" placeholder="@lang('Enter description')">
                                </div>
                                <div class="form-group col-6">
                                    <input type="text" class="form-control" name="user_id" id="user_id" hidden value="{{$currentUser->id}}" placeholder="{{$currentUser->id}}">
                                </div>

                                <div class="form-group col-6">
                                        <select class="form-select" aria-label="Default select example"
                                                type="select" name="vehicle_id" id="vehicle_id">
                                            <option selected>Select model</option>
                                            @foreach($vehicles as $vehicle)
                                                <option value="{{$vehicle->id}}">{{$vehicle->make->name}} {{$vehicle->model->name}}</option>
                                            @endforeach
                                        </select>
{{--                                    <label for="description">@lang('Vehicle')</label>--}}
{{--                                    <input type="text" class="form-control" name="vehicle_id" id="vehicle_id" value= "{{$model->vehicle_id ?? ''}}" placeholder="@lang('Enter Vehicle')">--}}
                                </div>
                                <div class="form-group col-6">
                                    <label for="description">@lang('location')</label>
                                    <input type="text" class="form-control" name="location" id="location" value= "{{$model->location ?? ''}}" placeholder="@lang('Enter location')">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">@lang('Submit')</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
