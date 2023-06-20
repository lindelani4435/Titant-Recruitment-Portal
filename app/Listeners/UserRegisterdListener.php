<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Registered;
use Mail;
use App\Events\UserRegistered;
use App\Mail\UserRegisteredMailable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserRegisterdListener implements ShouldQueue
{

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param    $event
     * @return void
     */
    public function handle($event)
    {
        $user = $event->user;
        Mail::to($user->email)->send(new UserRegisteredMailable($user));
    }

}
