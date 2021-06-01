@extends('admin.layouts.page',['content_title'=>'Makes'])

@section('content')
    <?php
    if($model->exists){
        $tableColor = 'primary';
        $action = 'edit';
        $route = route('admin.vehiclemodel.update',$model);
    }else{
        $tableColor = 'success';
        $action = 'create';
        $route = route('admin.vehiclemodel.store');
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
                            <div class="card-body row">
                                <div class="form-group col-4">
                                    <label for="name">@lang('Vehicle Model')</label>
                                    <input type="text" class="form-control" name="name" id="name" value= "{{$model->name ?? ''}}" placeholder="@lang('Vehicle Model')">
                                </div>
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
