import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  submitted: boolean = false;
  editMode: boolean = false;
  private postId: string | undefined;
  public readonly:boolean = true;

  constructor(private service:ApiserviceService, public route: ActivatedRoute, private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {


    this.rewardForm = new FormGroup({

      "bod": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      "fil": new FormControl(null, [Validators.required])

      
    })

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) { // the id passed in paramMap.has('id') has to be same as it define in routing module.
        this.editMode = true;
        

      } else {
        this.editMode = false;
        
        
      }
    });

  //   CKEDITOR.replace( 'ckeditorContent', {
  //     fullPage: true,
  //     extraPlugins: 'font,panelbutton,colorbutton,colordialog,justify,indentblock,aparat,buyLink',
  //     // You may want to disable content filtering because if you use full page mode, you probably
  //     // want to  freely enter any HTML content in source mode without any limitations.
  //     allowedContent: true,
  //     autoGrow_onStartup: true,
  //     enterMode: CKEDITOR.ENTER_P
      
     
    
      
      
      
  // } );

  }

  myform !: FormGroup;

  rewardForm:any;

  public file:string =''


  get bodss(){return this.rewardForm.get('bod');}
  get filee(){return this.rewardForm.get('fil');}


  uploadsss(event: any)
  {
   this.file = event.target.files[0];

  // console.log(this.file);
  }


  public bod:string= ' ';


  clickhandle()
{

  this.submitted = true;

  console.log(this.file)
  console.log(this.bod)

  if(this.rewardForm.invalid)
  {
    console.log("Invalid");
  }
  else{

    console.log("Valid");


    let formData = new FormData()
    formData.append("picturePath",this.file)
    formData.append("topic",this.bod)
  
  
  
  this.service.getUploadRewards(formData).subscribe((res)=>{
  
    console.log(formData);
  
    console.log(formData);
  
    if(res.message =="Unsupported extension")
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'File not suppotted!',
      
      })
  
  
    }
    else if( res.message =="File must be less than 5MB" )
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'File must be less than 5MB!',
      
      })
    }
    else if(res.message =="Rewards updated successfully")
    {
  
      Swal.fire({
      
        icon: 'success',
        title: 'Rewards updated successfully!',
        showConfirmButton: false,
        timer: 2500
      })
       this.rewardForm.reset();
    
      // this.dialog.closeAll();
    
      
    }else
    {
  
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occured!',
      
      })
  
    }
  
  
  })
    
  }



}

}
