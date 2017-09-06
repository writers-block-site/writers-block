<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Docs extends Model
{
    protected $table = 'docs';
    public static $rules = [
        'title' => 'required|min:2|max:200',
        'file' => 'required',
        'genre'=> 'required'
    ];
}
