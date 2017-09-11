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
        $handle = fopen("https://process.filestackapi.com/output=f:txt/".$url,'r');

        $contents = trim(stream_get_contents($handle));

        fclose($handle);

        return $contents;
    }

    public function user()
    {
        return $this->belongsTo('\App\User','uploaded_by');
    }

    public function comments()
    {
       return $this->hasMany('\App\Models\Comments','doc_id');
    }
}
