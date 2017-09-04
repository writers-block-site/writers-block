@extends('layouts.app')

<?php
    $test = 'Hello!';
?>

@section('content')
    <link rel='stylesheet' href='/css/app.css'></link>
    <div id='home'>
        <div class='title-container'>
            <span class='title' >Writer's Block  <span class="glyphicon glyphicon-book book"></span></span>
        </div>
        <div>
            <div class='container-fluid'> 
                <span class='col-sm-4 text-center'>{{ $test }}</span>
                <span class='col-sm-4 text-center'>{{ $test }}</span>
                <span class='col-sm-4 text-center'>{{ $test }}</span>
                
            </div>
        </div>
    </div>
@endsection