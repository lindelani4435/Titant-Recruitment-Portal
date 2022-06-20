import { Component, Input, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-annoucement',
  templateUrl: './annoucement.component.html',
  styleUrls: ['./annoucement.component.css']
})
export class AnnoucementComponent implements OnInit {

  

  editMode: boolean = false;
  private postId: string | undefined;
  public readonly:boolean = true;

  

  //post: Post = { title: '', body: '' };

  constructor( private service:ApiserviceService, public route: ActivatedRoute, private router: Router) { }


  

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

  ckeditorContent:any;
  
  




  
  
  

  public post = {
    title: '',
    body: ''
  
  };
 



  // savePost(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   } else {
  //     if (this.editMode) {
  //       const post = {
  //         _id: this.postId,
  //         title: form.value.title,
  //         body: form.value.body,
          

  //       }
  //     } else {
  //       const post = {
  //         title: form.value.title,
  //         body: form.value.body,
  //       }
  //     }
  //     //this.router.navigate(['/']);

     
  //   }
  // }



public title:string ='';
public body:string= ' ';
public date:string ='';
public message:string ='';






clickhandle()
{

  


  console.log(this.post.body);
  console.log(this.title);
  console.log(this.date);
 


  this.service.getAnnouncement({"title":this.title, "message":this.post.body, "date":this.date }).subscribe((res)=>{

   
    // console.log(this.mNumber);
    // console.log(this.skills);
    // console.log(res.message);

    if(res.message =="Notice updated successfully")
    {
      alert("Notice updated successfully");
       
        
    }
    else if(res.message == "An error occured notice not updated"){
     

      Swal.fire({
          
        icon: 'success',
        title: 'Notice board successfully updated',
        showConfirmButton: false,
        timer: 2500
      })

    }
  });
  


}

}

