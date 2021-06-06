@extends('admin.layouts.page',['content_title'=>'Vehicles'])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $action = 'edit';
        $route = route('admin.vehicles.update', $model);
    } else {
        $tableColor = 'success';
        $action = 'create';
        $route = route('admin.vehicles.store');
    }
    ?>
    <section class="content">
        <div class="container-fluid">
            <div class="container row">
                <div class="col-12">
                    <div class="card card-{{$tableColor}}">
                        <div class="card-header">
                            <h3 class="card-title">@lang('New vehicle')</h3>
                        </div>

                        <form action="{{$route}}" method="POST">

                            @if($model->exists)
                                @method('PUT')
                            @endif
                            @csrf()
                            <div class="container row">
                                <div class="form-group col-4 mt-3">
                                    <select class="select2 w-100"
                                            type="select" name="make_id" id="make_id">
                                        <option selected>Select manufacturer</option>
                                        @foreach($makes as $make)
                                            <option value="{{$make->id}}">{{$make->name}}</option>
                                        @endforeach

                                    </select>
                                </div>
                                <div class="form-group col-4 mt-3">
                                    <select class="select2 w-100"
                                            type="select" name="model_id" id="model_id">
                                        <option selected>Select model</option>
                                        @foreach($vehicleModels as $vehicleModel)
                                            <option value="{{$vehicleModel->id}}">{{$vehicleModel->name}}</option>
                                        @endforeach

                                    </select>
                                </div>
                                <div class="form-group col-4 mt-3">
                                    <select class="select2 w-100"
                                            type="select" name="category_id" id="category_id">
                                        <option selected>Select a category</option>
                                        @foreach($categories as $category)
                                            <option value="{{$category->id}}">{{$category->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
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
