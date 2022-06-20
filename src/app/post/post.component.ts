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

  
  editMode: boolean = false;
  private postId: string | undefined;
  public readonly:boolean = true;

  constructor(private service:ApiserviceService, public route: ActivatedRoute, private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) { // the id passed in paramMap.has('id') has to be same as it define in routing module.
        this.editMode = true;
        

      } else {
        this.editMode = false;
        
        
      }
    });

    CKEDITOR.replace( 'ckeditorContent', {
      fullPage: true,
      extraPlugins: 'font,panelbutton,colorbutton,colordialog,justify,indentblock,aparat,buyLink',
      // You may want to disable content filtering because if you use full page mode, you probably
      // want to  freely enter any HTML content in source mode without any limitations.
      allowedContent: true,
      autoGrow_onStartup: true,
      enterMode: CKEDITOR.ENTER_P
      
     
    
      
      
      
  } );

  }

  rewardForm !: FormGroup;

  public file:string =''

  uploadsss(event: any)
  {
   this.file = event.target.files[0];

  // console.log(this.file);
  }


  ckeditorContent:any;
  

  public post = {
    title: '',
    body: ''
  
  };


  public title:string ='';
  public body:string= ' ';
  public date:string ='';
  public message:string ='';

  clickhandle()
{

  // if(this.rewardsForm.invalid)
  // {
  //     console.log("invalid");

  // }
  // else
  // {
  //   console.log("valid");
  // }

  console.log(this.file)
  console.log(this.body)



let formData = new FormData()
  formData.append("picturePath",this.file)
  formData.append("topic",this.body)



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
