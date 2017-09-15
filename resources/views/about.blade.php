@extends('layouts.app')

@section('content')

<div class="container text-center aboutUs">
    <h1 class='title'>Who We Are</h1>
    <div class="row">
        <p class='col-sm-offset-2 col-sm-8 body'>
            We are a team of two passionate full stack developers dedicated and determined to finding solutions to your needs
        </p>

        <div class="row">

            <div class="col-md-6">
                <img class="daniel" src="/css/img/DanielRojoGuttierrez1 (1).jpg" alt="">
            </div>

            <div class="col-md-6">
                <img class="daniel" src="/css/img/DouglassHooker1.jpg" alt="">
            </div>

        </div>

        <div class="row">

            <div class="col-md-offset-2 col-md-2">
                <a href="http://github.com/duhanyul"><img class="icon text-left"src="/css/img/github-512.png" alt=""></a>
            </div>
            <div class="col-md-offset-2 col-md-2">
                <a href="https://github.com/DukeFerdinand"><img class="icon text-left"src="/css/img/github-512.png" alt=""></a>
            </div>

        </div>


    </div>
</div>


@endsection
