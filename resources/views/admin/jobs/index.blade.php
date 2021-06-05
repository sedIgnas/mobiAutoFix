@extends('admin.layouts.page',['content_title'=>trans('Jobs')])

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">@lang('List')</h3>
                            <div>
                                <a href="{{route('admin.jobs.create')}}" style = "float:right" class="btn btn-success" href="">@lang('New')</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="course_table_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6"></div>
                                    <div class="col-sm-12 col-md-6"></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="course_table"
                                               class="table table-bordered table-hover dataTable dtr-inline"
                                               role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting sorting_asc" tabindex="0" rowspan="1" colspan="1"
                                                    aria-sort="ascending">
                                                    @lang('Created at')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Job poster')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Description')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Vehicle')
                                                </th>                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Location')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($jobs as $job)
{{--                                            {{$job->user_id}}--}}
                                                <tr class="odd">
                                                    <td>{{$job->created_at ?? ''}}</td>
                                                    <td>{{$job->user->first_name ?? ''}}</td>
                                                    <td>{{$job->description ?? ''}}</td>
                                                    <td>{{$job->vehicle->make->name ?? ''}} {{$job->vehicle->model->name ?? ''}}</td>
                                                    <td>{{$job->location ?? ''}}</td>
                                                    <td><a class="btn btn-info"
                                                           href="{{route('admin.jobs.edit', $job->id)}}">@lang('Edit')</a>
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


