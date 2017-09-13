<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('reactApp');
});

// Route::get('/doc', function () {
//     return view('reactApp');
// });

Route::resource('docs','DocsController');
Route::resource('comments','CommentsController');
Route::get('/profile/userPage/{id}','UserController@userPage');
Auth::routes();
Route::get('/home', 'HomeController@index');
Route::get('docs/getDiff/{id}', 'DocsController@getDiff');
Route::get('/about',function (){
    return view('about');
});
Route::get('/{any}', function(){
    return view('reactApp');
})->where('any', '.+');
