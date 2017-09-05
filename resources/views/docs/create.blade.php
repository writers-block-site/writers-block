@extends('layouts.app')

@section('content')

    <div class="container">
        <h1>UPLOAD YOUR DOC</h1>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Upload</div>

                    <div class="panel-body">
                        <form class="form-horizontal" action="{{action('DocsController@store')}}" method="post">
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
                                    <input id="genre" type="text" class="form-control" name="genre" value="{{ old('genre') }}" required autofocus>
                                    <datalist id="genres">
                                      <option value="Boston">
                                      <option value="Cambridge">
                                    </datalist>
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

        var client = filestack.init('Aj3SaA9lWT0WlrREr0zRxz');
        document.getElementById('doc').addEventListener("click",picker);



        function picker()
        {
            client.pick({
                accept: ['.txt','.doc','.docx','.pdf','.odt'],
                maxFiles: 1,
            }).then(function(results){
                var label = document.getElementById('selected');
                var hidden = document.getElementById('doc_handle');
                label.innerHTML = "<a href='" + results.filesUploaded[0].url + "'>Your Document</a>";
                hidden.setAttribute('value',results.filesUploaded[0].handle);
            })
        }
    }());
    </script>
@endsection
