<?php

namespace App\Http\Controllers;

use App\Mail\SignUp;
use App\User;
use App\Notifications\SignUpNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CandidateController extends Controller
{
    //
    public function register(){
        return view("auth.registerMail");
    }


    public function registerUser(Request $request){

        $user = new User();
        $user->first_name = $request->input('first_name');
        $user->middle_name = $request->input('middle_name');
        $user->last_name = $request->input('last_name');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        $user->is_active = 0;
        $user->verified = 0;
        $user->save();

//        $details=[
//            'greeting'=>'Hi laravel',
//            'body'=>'Email body',
//            'actionText'=>'Click to Verify',
//            'actionUrl'=>'/login',
//            'lastLine'=>'Last Line of the email verification',
//        ];
//
//        Notification::send($result, new SignUpNotification($details));


        return dd("sent");
    }
}
