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

    public function update($id)
    {
        return redirect()->action('DocsController@show');
    }

    public function destroy($id)
    {
        return redirect()->action('DocsController@index');
    }
}
