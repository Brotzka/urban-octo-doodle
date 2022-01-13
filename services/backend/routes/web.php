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

Route::get('/test', function () {
    $link = url('/foo');
    $link2 = url('sanctum/csrf-cookie');
    return "Hallo {$link}<br> <a href='" . $link2 . "'>{$link2}</a>";
});
