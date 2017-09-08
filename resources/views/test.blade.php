@extends('layouts.app')

@section('content')

    <div class="panel-body">
        <form class="form-horizontal" action="{{action('CommentsController@store')}}" method="post" enctype="multipart/form-data">
            {!! csrf_field() !!}

            <div class="form-group">
                <label for="title" class="col-md-4 control-label">Document Title</label>
                <div class="col-md-6">
                    <input id="title" type="text" class="form-control" name="comment" value="{{ old('title') }}" required autofocus>
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-8 col-md-offset-4">
                    <button type="submit" class="btn btn-primary">
                        Upload
                    </button>
                </div>
            </div>

        </form>
    </div>

    <div class="">
        <h1><a href="docs/1">TESTING</a></h1>
    </div>
@endsection
