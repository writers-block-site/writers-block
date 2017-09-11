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

    public function __construct()
    {
        $this->middleware('ajax', ['except' => ['store','create']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $docs = Docs::with('user')
                ->orderBy('updated_at','ASC')
                ->Paginate(6);

        return response()->json($docs);
    }

    public function edit($id){
        $doc = Docs::findOrfail($id);
        $data['doc'] = $doc;
        return view('docs.edit',$data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

        $data['success'] = "Your upload has been saved";

        return response()->json($data);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $docs = Docs::with('user')->with('comments')->findOrfail($id);
        $handle = explode(',',$docs->handles);
        $handle = end($handle);
        $docs->handles = $handle;
        $docs->view_count +=1;
        $docs->save();

        return response()->json($docs);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $doc = Docs::findOrfail($id);
        $this->validate($request,Docs::$update);
        $doc->title = $request->title;
        $doc->genre = $request->genre;
        if ($request->handle !== "")
        {
            $doc->handles = $doc->handles .",". $request->handle;
        }
        $doc->save();
        return redirect()->action('DocsController@show',$doc->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function create() {
        return view('docs.create');
    }
    public function getDiff($doc1,$doc2)
    {
        $doc1 = Docs::findOrfail($doc1);
        $doc2 = Docs::findOrfail($doc2);

        $contents1 = Docs::parse($doc1->handle);
        $contents2 = Docs::parse($doc2->handle);

        $data['doc1'] = $contents1;
        $data['doc2'] = $contents2;

        return response()->json($data);
    }
}
