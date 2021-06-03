@extends('admin.layouts.page',['content_title'=>'Vehicles'])

@section('content')
    <?php
        if($model->exists){
            $tableColor = 'primary';
            $action = 'edit';
            $route = route('admin.vehicles.update',$model);
        }else{
            $tableColor = 'success';
            $action = 'create';
            $route = route('admin.vehicles.store');
        }
    ?>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

                    <div class="card card-{{$tableColor}}">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.new_entry')</h3>
                        </div>

                        <form action="{{$route}}" method="POST">

                            @if($model->exists)
                                @method('PUT')
                            @endif
                            @csrf()
{{--                            <div class="card-body row">--}}
{{--                                <div class="form-group col-4">--}}
{{--                                    <label for="make_id">@lang('Vehicle make')</label>--}}
{{--                                    <input type="text" class="form-control" name="make_id" id="make_id" value= "{{$model->make_id ?? ''}}" placeholder="@lang('Vehicle Make')">--}}
{{--                                </div>--}}

                                <div class="form-group col-4">
                                    <select class="form-select" aria-label="Default select example"
                                    type="select" name="make_id" id="make_id">
                                        <option selected>Select manufacturer</option>
                                        @foreach($makes as $make)
                                        <option value="{{$make->id}}">{{$make->name}}</option>
                                        @endforeach

                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select class="form-select" aria-label="Default select example"
                                            type="select" name="model_id" id="model_id">
                                        <option selected>Select model</option>
                                        @foreach($vehicleModels as $vehicleModel)
                                            <option value="{{$vehicleModel->id}}">{{$vehicleModel->name}}</option>
                                        @endforeach

                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select class="form-select" aria-label="Default select example"
                                            type="select" name="category_id" id="category_id">
                                        <option selected>Select a category</option>
                                        @foreach($categories as $category)
                                            <option value="{{$category->id}}">{{$category->name}}</option>
                                        @endforeach
                                    </select>
                                </div>

{{--                                <div class="form-group col-4">--}}
{{--                                    <label for="model_id">@lang('Vehicle model')</label>--}}
{{--                                    <input type="text" class="form-control" name="model_id" id="model_id" value= "{{$model->model_id ?? ''}}" placeholder="@lang('Vehicle Model')">--}}
{{--                                </div>--}}

{{--                                <div class="form-group col-4">--}}
{{--                                    <label for="model_id">@lang('Vehicle category')</label>--}}
{{--                                    <input type="text" class="form-control" name="category_id" id="category_id" value= "{{$model->category_id ?? ''}}" placeholder="@lang('Vehicle Category')">--}}
{{--                                </div>--}}
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">@lang('app.submit')</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
