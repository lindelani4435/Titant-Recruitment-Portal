<?php

use App\Mail\UserEntered;

if (isset($_POST['submit'])){
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = $_POST['email'];
    $message = new UserEntered();

    $mailTo = $email;
    $headers = "From: "."noreply@titant.co.za";
    $txt = "Email received from ".$first_name. "\n\n".$message;

    //Mail method
    mail($mailTo, $txt, $headers);
    new UserEntered();
}