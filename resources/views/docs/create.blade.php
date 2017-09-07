@extends('layouts.app')

@section('content')

    <div class="container">
        <h1>UPLOAD YOUR DOC</h1>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Upload</div>

                    <div class="panel-body">
                        <form class="form-horizontal" action="{{action('DocsController@store')}}" method="post" enctype="multipart/form-data">
                            {!! csrf_field() !!}

                            <div class="form-group">
                                <label for="title" class="col-md-4 control-label">Document Title</label>
                                <div class="col-md-6">
                                    {!!$errors->first('title', '<span class="help-block">:message</span>')!!}
                                    <input id="title" type="text" class="form-control" name="title" value="{{ old('title') }}" required autofocus>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="genre" class="col-md-4 control-label">Genre</label>
                                <div class="col-md-6">
                                    {!!$errors->first('genre', '<span class="help-block">:message</span>')!!}
                                    <input list="genres" type="text" class="form-control" name="genre" value="{{ old('genre') }}" required autofocus>
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
                                    <button type="submit" class="btn btn-primary">
                                        Upload
                                    </button>
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
                accept: ['.txt','.doc','.docx','.pdf','.odt'],
                maxFiles: 1,
            }).then(function(results){
                var label = document.getElementById('selected');
                var handle = document.getElementById('doc_handle');
                var transform = document.getElementById('transform');
                label.innerHTML = "<a href='" + results.filesUploaded[0].url + "'>Your Document</a>";
                handle.setAttribute('value',results.filesUploaded[0].handle);
                transform.setAttribute('value',"https://process.filestackapi.com/output=f:txt/" + results.filesUploaded[0].handle);
            })
        }
    }());
    </script>
@endsection
