@extends('admin.layouts.page',['content_title'=>'Vehicles'])

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.list')</h3>
                            <div>
                                <a href="{{route('admin.vehicles.create')}}" style = "float:right" class="btn btn-success" href="">@lang('New')</a>
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
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Models')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Category')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Actions')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($vehicles as $vehicle)
                                                <tr class="odd">
                                                    <td>{{$vehicle->created_at ?? ''}}</td>
                                                    <td>{{$vehicle->make->name ?? ''}}</td>
                                                    <td>{{$vehicle->model->name ?? ''}}</td>
                                                    <td>{{$vehicle->category->name ?? ''}}</td>
                                                    <td><a class="btn btn-info"
                                                           href="{{route('admin.vehicles.edit', $vehicle->id)}}">@lang('Edit')</a>
                                                        <form action="{{ route('admin.vehicles.destroy',$vehicle->id) }}" method="POST">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-danger">Delete</button>
                                                        </form>
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
