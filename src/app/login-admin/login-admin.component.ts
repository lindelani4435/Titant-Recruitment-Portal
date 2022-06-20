import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {


  constructor(private service:ApiserviceService, private route:Router) { }

  ngOnInit(): void {

    
    this.loginForm = new FormGroup({

      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "password": new FormControl(null,[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-z]*')]), ///

       //"pdf": new FormControl(null, [Validators.required, requiredFileType('pdf')])

    })



  
  }

  get emails(){return this.loginForm.get('email');}
  get passwords(){return this.loginForm.get('password');}



  loginForm:any;

  public emal:string =''
  public passw:string =''




  clickhandle(){


    

    if(this.loginForm.invalid)
    {
      
      console.log("invalid");
    }
    else
    {
      console.log(" valid");

    this.service.getAllData({"admin_email":this.emal, "admin_password": this.passw }).subscribe((res)=>{
       
      console.log(res.message);

      if(res.message =="login Successful")
      {
        //alert("You are successful loged in")
        Swal.fire({
          
          icon: 'success',
          title: 'Successfully login',
          showConfirmButton: false,
          timer: 2500
        })
          this.route.navigate(["layout"])
          
      }
      else{

        alert(res.message);
      }
    });
    }

    // this.service.getAllData({"admin_email":this.emal, "admin_password": this.password }).subscribe((res)=>{
       
    //   console.log(res.message);

    //   if(res.message =="login Successful")
    //   {
    //     //alert("You are successful loged in")
    //     Swal.fire({
          
    //       icon: 'success',
    //       title: 'Successfully login',
    //       showConfirmButton: false,
    //       timer: 2500
    //     })
    //       this.route.navigate(["layout"])
          
    //   }
    //   else{

    //     alert(res.message);
    //   }
    // });
    
    
  }

}
