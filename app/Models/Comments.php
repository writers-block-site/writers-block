<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $table = 'comments';

    public static $rules =
    [
        'comment' => 'required|min:2|max:100000',
        'doc_id' => 'required',
    ];

    public function user()
    {
        return $this->belongsTo('\App\User','uploaded_by');
    }

    public function docs()
    {
        return $this->belongsTo('\App\Docs','doc_id');
    }
}
