@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    @foreach($users as $user)
{{--                    {{ __('You are logged in as') }} {{$singleUser->}}--}}
                            {{ __('You are logged in as') }} {{$user->role->name ?? ''}} {{ __('user') }}

                        @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
