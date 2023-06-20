<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Request;
use Illuminate\Support\Facades\DB;

class CandidateController extends Controller
{
    //
    public function insertCandidateForm(){
        return view('register');
    }

    public function insertCandidate(Request $request){
        $first_name = $request->input('first_name');
        $middle_name = $request->input('middle_name');
        $last_name = $request->input('last_name');
        $email = $request->input('email');
        $password = bcrypt($request->input('password'));
        $data=array('first_name'=>$first_name,"middle_name"=>$middle_name,
            "last_name"=>$last_name,"email"=>$email,"password"=>$password);
        DB::table('users')->insert($data);
        echo "Account Record inserted successfully.<br/>";
        echo '<a href = "/insert-user">Click Here</a> to go back.';
    }
}
