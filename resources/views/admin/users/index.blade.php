@extends('admin.layouts.page',['content_title'=>trans('app.users')])

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">@lang('app.list')</h3>
                            <div>
                                <a href="{{route('admin.users.create')}}" style = "float:right" class="btn btn-success" href="">@lang('app.new')</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="user_table_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6"></div>
                                    <div class="col-sm-12 col-md-6"></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <table id="user_table"
                                               class="table table-bordered table-hover dataTable dtr-inline"
                                               role="grid" aria-describedby="example2_info">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting sorting_asc" tabindex="0" rowspan="1" colspan="1"
                                                    aria-sort="ascending">
                                                    @lang('created_at')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('first_name')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('last_name')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Role')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('City')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('Address')
                                                </th>
                                                <th class="sorting" tabindex="0" rowspan="1" colspan="1">
                                                    @lang('actions')
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($users as $user)
                                                <tr class="odd">
                                                    <td>{{$user->created_at ?? ''}}</td>
                                                    <td>{{$user->first_name ?? ''}}</td>
                                                    <td>{{$user->last_name ?? ''}}</td>
                                                    <td>{{$user->role->name ?? ''}} level user</td>
                                                    <td>{{$user->city->name ?? ''}}</td>
                                                    <td>{{$user->address ?? ''}}</td>
                                                    <td><a class="btn btn-info"
                                                           href="{{route('admin.users.edit', $user->id)}}">@lang('Edit')</a>
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
