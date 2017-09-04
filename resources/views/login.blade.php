@extends('layouts._master')

@section('content')
    <div id='login'>
        <div class='content'>
            {!! csrf_field() !!}
            <h1>Login!</h1>
        </div>
    </div>
@endsection