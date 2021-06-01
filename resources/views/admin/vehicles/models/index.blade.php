@extends('admin.layouts.page',['content_title'=>'Vehicle models'])

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.list')</h3>
                            <div>
                                <a href="{{route('admin.vehiclemodel.create')}}" style = "float:right" class="btn btn-success" href="">@lang('New')</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="client_table_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6"></div>
                                    <div class="col-sm-12 col-md-6"></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="client_table"
                                               class="table table-bordered table-hover dataTable dtr-inline"
                                               role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Timestamps')
                                                </th>
                                                <th class="sorting sorting_asc" tabindex="0" rowspan="1" colspan="1"
                                                    aria-sort="ascending">
                                                    @lang('Make')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($vehicleModels as $model)
                                                <tr class="odd">
                                                    <td>{{$model->name ?? ''}}</td>
                                                    <td><a class="btn btn-info"
                                                           href="{{route('admin.vehiclemodel.edit', $model->id)}}">@lang('Edit')</a>
                                                    </td>
                                                </tr>
                                            @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
