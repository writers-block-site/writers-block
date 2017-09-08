<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Docs extends Model
{
    protected $table = 'docs';
    public static $rules =
    [
        'title' => 'required|min:2|max:200',
        'handle' => 'required',
        'genre'=> 'required',
    ];

    public static $update =
    [
        'title' => 'required|min:2|max:200',
        'handle' => 'nullable',
        'genre'=> 'required',
    ];


    public static function parse($url)
    {
        fopen("https://process.filestackapi.com/output=f:txt/Filestack_FileLink_Handle".$url,'r');

        $contents = stream_get_contents($handle);

        $contentsArray = explode('\n',$contents);

        fclose($url);

        return $contentsArray;
    }

    public function user()
    {
        $this->belongsTo('\App\User','uploaded_by');
    }

    public function comment()
    {
        $this->hasMany('\App\Comments','doc_id');
    }
}
