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
        $this->middleware('ajax', ['except' => ['store','create','edit','update','getDiff']]);
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $docs = Docs::with('user')
        ->orderBy('created_at','DESC')
        ->Paginate(6);

        if ($request->has('type'))
        {

            $type = $request->type;
            $docs = Docs::searchByType($type)->Paginate(6);

        }

        if($request->has('search'))
        {
            $search = $request->search;
            $docs = Docs::search($search)->Paginate(6);
        }

        return response()->json($docs);
    }

    public function edit($id){
        $doc = Docs::findOrfail($id);
        if (Auth::id()==$doc->uploaded_by) {

            $data['doc'] = $doc;
            return view('docs.edit',$data);

        }else {
            return redirect("/posts/$doc->id/view");
        }
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

        return redirect("/posts/$doc->id/view");

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
        $docs->view_count +=1;
        $docs->save();
        $handle = explode(',',$docs->handles);
        $handle = end($handle);
        $docs->handles = $handle;

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
        if ($request->handle != null)
        {
            $oldHandles = $doc->handles;
            $newHandle = $oldHandles .",".$request->handle;
            $doc->handles = $newHandle;
        }
        $result = $doc->save();

        if ($result) {

            return redirect("/posts/$doc->id/view");

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->id;
        $post = Docs::findOrfail($id);

        $post->delete();

        return response()->json(['success' => 'it has been deleted']);
    }
    public function create() {
        return view('docs.create');
    }
    public function getDiff($id)
    {
        // $id = $request->id;

        $post = Docs::findOrfail($id);

        $handles = explode(',',$post->handles);
        $handle1 = end($handles);

        $handle2 = $handles[count($handles)-2];

        $contents1 = Docs::parse($handle1);
        $contents2 = Docs::parse($handle2);

        $contents1 = utf8_encode($contents1);
        $contents2 = utf8_encode($contents2);


        $data['doc1'] = $contents1;
        $data['doc2'] = $contents2;

        return response()->json($data);
    }
}
