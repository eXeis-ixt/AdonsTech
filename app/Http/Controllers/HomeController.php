<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render('Home');
    }
    public function services(){
        $users =  User::all();
        return Inertia::render('Services', [
            'users' => $users
        ]);
    }
    public function portfolio(){
        $portfolios = Portfolio::all();
        return Inertia::render('Portfolio',[
            'portfolios' => $portfolios
        ]);
    }
}
