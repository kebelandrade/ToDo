<?php

use Illuminate\Support\Facades\Route;

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


Route::get('/', 'ToDoController@index')->name('todo.index');

Route::get('/complete', 'ToDoController@show')->name('todo.complete');

Route::post('/', 'ToDoController@store')->name('todo.store');

Route::put('/{todo}', 'ToDoController@update')->name('todo.update');

Route::post('/s', 'ToDoController@select')->name('todo.select');

Route::delete('/', 'ToDoController@all')->name('todo.all');

