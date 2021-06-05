@extends('admin.layouts.page',['content_title'=>trans('Users')])

@section('content')
    <?php
    if ($model->exists) {
        $tableColor = 'primary';
        $action = 'edit';
        $route = route('admin.users.update', $model);
    } else {
        $tableColor = 'success';
        $action = 'create';
        $route = route('admin.users.store');
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

                        <form action="{{$route}}" method="POST" enctype="multipart/form-data">

                            @if($model->exists)
                                @method('PUT')
                            @endif
                            @csrf()
                            <div class="card-body row">
                                <div class="form-group col-4">
                                    <label for="first_name">@lang('First Name')</label>
                                    <input type="text" class="form-control" name="first_name" id="first_name"
                                           value="{{$model->first_name ?? ''}}"
                                           placeholder="@lang('Enter first name')">
                                </div>
                                <div class="form-group col-4">
                                    <label for="last_name">@lang('Last Name')</label>
                                    <input type="text" class="form-control" name="last_name" id="last_name"
                                           value="{{$model->last_name ?? ''}}"
                                           placeholder="@lang('Enter last name')">
                                </div>
                                <div class="form-group col-4">
                                    <label for="email">@lang('Email')</label>
                                    <input type="email" class="form-control" name="email" id="email"
                                           value="{{$model->email ?? ''}}" placeholder="@lang('Enter email')">
                                </div>
                                <div class="form-group col-4">
                                    <label for="city_id">@lang('Select city')</label>
                                    <select class="form-group col-4 select2"
                                            type="select" name="city_id" id="city_id">
                                        <option selected>Select city</option>
                                        @foreach($cities as $city)
                                            <option value="{{$city->id}}">{{$city->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <label for="address">@lang('Address')</label>
                                    <input type="text" class="form-control" name="address" id="address"
                                           value="{{$model->address ?? ''}}" placeholder="@lang('Enter address')">
                                </div>
                                <div class="form-group col-4">
                                    <label for="password">@lang('Password')</label>
                                    <input type="password" class="form-control" name="password" id="password"
                                           value="{{$model->password ?? ''}}" placeholder="@lang('Enter password')">
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
