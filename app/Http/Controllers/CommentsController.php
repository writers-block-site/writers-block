<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Comments;
use Illuminate\Support\Facades\DB;
use Log;

class CommentsController extends Controller
{

    public function __construct()
    {
        $this->middleware('ajax');
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Auth::id();
        $comments = DB::table('comments')
                            ->where('uploaded_by', '=', $id)
                            ->orderBy('created_at','DESC')
                            ->Paginate(6);
        return response()->json($comments);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comment = new Comments();
        $comment->comment = $request->comment;
        $comment->uploaded_by = Auth::id();
        $comment->doc_id = $request->doc_id;

        $this->validate($request,Comments::$rules);

        $comment->save();

        $data['success'] = true;

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
        $comment = Comments::findOrfail($id);
        $this->validate($request,Comments::$rules);
        $comments->comment = $request->comment;

        $comment->save();

        $data['success'] = true;

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $comment = Comments::findOrfail($request->id);

        $comment->delete();

        return response()->json(['success' => 'it has been deleted']);

    }
}
