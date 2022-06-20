import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';


///for drop down
interface userss {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  submitted: boolean = false;

  constructor(private service:ApiserviceService, private route:Router, private formBuilder: FormBuilder) {

    this.signupForm = new FormGroup({

      name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      surname: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      email: new FormControl(null, [Validators.required, Validators.email]),///
      passwordi: new FormControl(null,[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-z]*')]), ///
      confPass: new FormControl(' ',[Validators.required] )
      
    },
    {
        validators:<any> this.MustMatch('passwordi','confPass')
        
  
    })

   }


//DropDownList
  users: userss[] = [
    {value: 'Student', viewValue: 'Student'},
    {value: 'Visitor', viewValue: 'Visitor'}

  ];


  

  ngOnInit(): void {


    
  }

  myform!:FormGroup;

//for inside of ngOnInit
  signupForm:any;

  ///For validating confirm password(Not working yet)
  MustMatch(controlName:string, matchingControlName: string){

    return(FormGroup:FormGroup) =>{


      const control = FormGroup.controls[controlName];
      const matchingControl = FormGroup.controls[matchingControlName];

      if(matchingControl.errors && !matchingControl.errors['MustMatch']){

        return
      }
      if(control.value !== matchingControl.value)
      { 
        matchingControl.setErrors({MustMatch:true})
      }
      else{

        matchingControl.setErrors(null)
      }
    } 
  }





  ///Local Variables
  public names:string=''
  public surnam:string=''
  public emal:string=''
  public password:string=''
  public confirmPassword: string=''


  ////Get Functions
 
  get namess(){return this.signupForm.get('name');}
  get surnamess(){return this.signupForm.get('surname');}
 


  get f (){return this.signupForm?.controls}


  clickhandle()
  {
    

    this.submitted = true;
   

    if(this.password !== this.confirmPassword)
    {
      console.log('Invalid')
      alert("Password does not match, Make sure the password match");
      return;

    }
    else{
      console.log('valid')

      //name, surname, email, password

      this.service.getSignup({"name":this.names,"surname":this.surnam,"email":this.emal,"password":this.password }).subscribe((res)=>{



       if( res.message == "User signed Up successfully✔✔✔") 
       {
          alert("Your signup is successfull, NB: PLEASE CHECK YOUR EMAIL TO CONFIRM YOUR EMAIL");
          this.signupForm.reset();
          this.route.navigate(["landing-page"]);
       }
       else if(res.message == "Email already signed up!!!")
       {
         alert("Email already exist use another one");
       }
       else if(res.message == "Problem with table!!!!")
       {
         alert("There is Problem with table!!!!");
       }
       else if(res.message == "Unable to signup!!!")
       {
         alert("Unable to signup!!!");
       }



      });
      

    }
/*
    if(this.signupForm.invalid)
    {
      console.log('Invalid')
      return;
    }
    
    if(this.signupForm.valid)
    {
      console.log('Valid')
    }

*/

  }

}



