<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Docs;
use Log;

class DocsController extends Controller
{

    public function __construct(){
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }
    public function index()
    {
        return view('/docs/reactApp');
    }

    public function create()
    {
        return view('/docs/create');
    }
    public function show($id){
        $doc = findOrfail($id);
        $doc->view_count += 1;
        $doc->save();
        return view('/docs/reactApp');
    }
    public function store(Request $request)
    {
        $doc = new Docs();

        $doc->title = $request->title;
        $doc->handles = $request->handle;
        $doc->genre = $request->genre;
        $doc->view_count = 0;
        $doc->uploaded_by = Auth::id();
        $this->validate($request,Docs::$rules);
        $doc->save();

        return redirect()->action('DocsController@index');
    }

    public function update(Request $request,$id)
    {
        $doc = Docs::findOrfail($id);
        $doc->title = $request->title;
        $doc->title = $request->genre;
        $doc->handles = $doc->handles .",". $request->handle;
        $this->validate($request,Docs::$rules);
        return redirect()->action('DocsController@show');
    }

    public function destroy($id)
    {
        return redirect()->action('DocsController@index');
    }
}