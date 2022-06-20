import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  registerForm:any
  ngOnInit(): void
  {

    this.registerForm = new FormGroup({

      name: new FormControl('',Validators.required),///
      lname: new FormControl('',Validators.required),
      
    })


  }


  get name()
  {
    return this.registerForm.get('name')
  }
  get lname()
  {
    return this.registerForm.get('lname')
  }

  clickhandle()
  {
    if(this.registerForm.invalid)
    {
      console.log('Invalid');
    }

    if(this.registerForm.valid)
    {
      console.log('valid');
    }
  }

}
