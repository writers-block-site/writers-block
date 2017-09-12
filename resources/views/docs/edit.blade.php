@extends('layouts.app')
@section('content')

    <div class="container">
        <h1>Update</h1>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Upload</div>

                    <div class="panel-body">
                        <form class="form-horizontal" action="{{action('DocsController@update',$doc->id)}}" method="post">
                            {!! csrf_field() !!}

                            <div class="form-group">
                                <label for="title" class="col-md-4 control-label">Document Title</label>
                                <div class="col-md-6">
                                    {!!$errors->first('title', '<span class="help-block">:message</span>')!!}
                                    <input id="title" type="text" class="form-control" name="title" value="{{ $doc->title }}" required autofocus>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="genre" class="col-md-4 control-label">Type</label>
                                <div class="col-md-6">
                                    {!!$errors->first('genre', '<span class="help-block">:message</span>')!!}
                                    <input placeholder='Click Dropdown For Example Types' list="genres" type="text" class="form-control" name="genre" value="{{ $doc->genre}}" required autofocus>
                                    @include('docs.partials.datalist')
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="id" id="selected" class="col-md-4 control-label">No Document selected</label>
                                <div class="col-md-6">
                                    <input type="button"id="doc"class="btn btn-primary" value="Choose document">
                                </div>
                            </div>
                            {!!$errors->first('handle', '<span class="help-block">Document must be selected</span>')!!}
                            <input id="doc_handle"type="hidden" name="handle" value="">
                            <div class="form-group">
                                <div class="col-md-8 col-md-offset-4">
                                    {{ method_field('PUT') }}
                                    <input type="submit" class="btn btn-primary" value="Upload">
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script src="https://static.filestackapi.com/v3/filestack.js"></script>

    <script type="text/javascript">
    (function() {
        'use strict';

        var client = filestack.init('Arm3f7HJReOkjrR25yPiwz');
        document.getElementById('doc').addEventListener("click",picker);



        function picker()
        {
            client.pick({
                accept: ['.doc','.docx','.odt','.txt'],
                maxFiles: 1,
            }).then(function(results){
                var label = document.getElementById('selected');
                var hidden = document.getElementById('doc_handle');
                label.innerHTML = "<a target = '_blank'href='" + results.filesUploaded[0].url + "'>Your Document</a>";
                hidden.setAttribute('value',results.filesUploaded[0].handle);
            })
        }
    }());
    </script>
@endsection
