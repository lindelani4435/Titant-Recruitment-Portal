import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

///for drop down
interface institutess {
  value: string;
  viewValue: string;
}

interface genders {
  value: string;
  viewValue: string;
}

interface skillss {
  value: string;
  viewValue: string;
}

interface levels {
  value: string;
  viewValue: string;
}

interface camp {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
  
})





export class RegistrationFormComponent implements OnInit {
  

  name = 'Angular';
  
  
  //reactiveForm: registerForm;
  //registerForm: FormGroup;
  submitted: boolean = false;
  selectedOption = '1';
  selectedUser = null;

  constructor(private service:ApiserviceService, private route:Router, private formBuilder: FormBuilder) {

   }

 // registerForm!: FormGroup;

  institutes: institutess[] = [

   
    {value: 'Faculty Of Information And Communication Technology', viewValue: 'Faculty Of Information And Communication Technology'},
    {value: 'Faculty Of Management Sciences', viewValue: 'Faculty Of Management Sciences'},
    {value: 'Faculty Of Arts And Design', viewValue: 'Faculty Of Arts And Design'},
  
  ];

  genders: genders[] = [
    {value: 'M', viewValue: 'Male'},
    {value: 'F', viewValue: 'Female'},

    

  ];

    skill: skillss[] = [
    {value: 'Business Analyst', viewValue: 'Business Analyst'},
    {value: 'Frontend Developer', viewValue: 'Frontend Developer'},
    {value: 'Backend Developer', viewValue: 'Tester'},
    {value: 'UX &UI Designer', viewValue: 'Backend Developer'},
    {value: 'Enthusiast', viewValue: 'Enthusiast'},
    {value: 'Scrum Master', viewValue: 'Scrum Master'},
    {value: 'Entrepreneur', viewValue: 'Entrepreneur'},



    

  ];
  level: levels[] = [
    {value: 'First Year', viewValue: 'First Year'},
    {value: 'Second Year', viewValue: 'Second Year'},
    {value: 'Final Year', viewValue: 'Final Year'},
 
  ];



  camps: camp[] = [
    {value: 'Soshanguve Campus', viewValue: 'Soshanguve Campus'},
    {value: 'Emalahleni Campus', viewValue: 'Emalahleni Campus'},
    {value: 'Pretoria Campus', viewValue: 'Pretoria Campus'},
    {value: 'Art Campus', viewValue: 'Art Campus'},
    {value: 'Garankuwa Campus', viewValue: 'Garankuwa Campus'},
 
  ];
 
 

  // showMe:boolean = true

  ngOnInit(): void {



    this.registerForm = new FormGroup({

      "studentNumber": new FormControl(null,[Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(9), Validators.minLength(9)] ),
      "names": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z ]*')]),///
      "surname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      "genders": new FormControl(null,Validators.required ),
      "campuses": new FormControl(null,Validators.required ),
      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "institutes": new FormControl(null,Validators.required ),
      "special": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      "mobileNumber": new FormControl(null,[Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10), Validators.minLength(10)] ),
      "age": new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')] ),
      "skill": new FormControl(null,Validators.required ),
      "level": new FormControl(null,Validators.required ),
      
    })
  }
  // theMenu()
  // {
  //   this.showMe=!this.showMe
  // }
  // title ='sweetalert2';
  // alertWithSuccess(){
  //   Swal.fire("Thank you... ", 'Your application was successfully submitted ','success')
  // }



  
  myform!:FormGroup;

  public student :string =''
  public names :string =''
  public surname:string =''
  public gender = null;
  public ages= null;
  public stud_email:string =''
  public facult = null;
  public  mNumber:string =''
  public skills= null;
  public leve= null;
  public spec= null;
  public campus= null;
  

 

  registerForm:any; ////

  //////////

  public hold :string =''


  ///submit Function

  get studentNumbers(){return this.registerForm.get('studentNumber');}
  get namess(){return this.registerForm.get('names');}
  get surnames(){return this.registerForm.get('surname');}
  get genderss(){return this.registerForm.get('genders');}
  get emails(){return this.registerForm.get('email');}
  get institutess(){return this.registerForm.get('institutes');}
  get mobilenumber(){return this.registerForm.get('mobileNumber');}
  get age(){return this.registerForm.get('age');}
  get skil(){return this.registerForm.get('skill');}
  get lev(){return this.registerForm.get('level');}
  get specs(){return this.registerForm.get('special');}
  get campusess(){return this.registerForm.get('campuses');}
  
  

 

 
  
  
 // get pdfs(){return this.registerForm.get('pdf');}


 get f(){return this.registerForm.controls}



 title ='sweetalert2';
 alertWithSuccess(){
   Swal.fire("Thank you... ", 'Your application was successfully submitted ','success')
 }






  clickhandle()
  {

    this.submitted = true;

    
    

    if(this.registerForm.invalid)
    {
     // this.hold = this.registerForm.invalid;
      console.log(this.hold);
      console.log('invalid');

      
      return;
    }else 


    {

      //this.hold = this.registerForm.valid;

      console.log(this.hold);
      console.log('valid');



      this.service.getRegistration({"stud_number":this.student, "name":this.names, "surname": this.surname,"gender": this.gender,"age": this.ages,"stud_email": this.stud_email,"faculty": this.facult,"mobile_number": this.mNumber, "skills": this.skills,"level": this.leve, "specialization": this.spec, "campus": this.campus }).subscribe((res)=>{
        console.log(this.student);
        console.log(this.names);
        console.log(this.surname);
        console.log(this.gender);
        console.log(this.age);
        console.log(this.stud_email);
        console.log(this.facult);
        console.log(this.mNumber);
        console.log(this.skills);
        console.log(this.leve);
        console.log(this.spec);
        console.log(res.campus);

        if(res.message =="Application successfully captured✔✔✔")
        {
          Swal.fire(
            'Application successfully submitted!',
            'Please check your email!',
            'success'
          )

            this.registerForm.reset();
            this.route.navigate([""])
            // this.route.navigate([""])
        }
        if(res.message =="Email already signed up!!!")
        {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email already signed up!',
            
          })
          
        }
        if(res.message =="Please enter your tut4life email")
        {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your tut4life email!',
            
          })

        }
      });


      
    }

    


  }

  
  
}




  interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}
 




 
function requiredFileType(arg0: string): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

export class institute
{
    public ids:number | undefined;
    public institute:string | undefined;
} 