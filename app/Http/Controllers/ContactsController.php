<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactsController extends Controller
{
    //
    public function send(Request $request){
        //validate form
        $request->validate([
            'full_name'=>'required',
            'email'=>'required',
            'subject'=>'required',
            'message_txt'=>'required'
        ]);

        if($this->isOnline()){
            return "Connected";
        }else{
            return "Not Connected";
        }
    }

    //Check internet connectivity
    public function isOnline($site = "https://youtube.com"){
        if(@fopen($site,"r")){
            return true;
        }else{
            return false;
        }
    }
}
