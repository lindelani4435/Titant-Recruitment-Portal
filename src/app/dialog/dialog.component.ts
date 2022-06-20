import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import {ApiserviceService} from '../apiservice.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';


//import { constants } from 'buffer';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  submitted: boolean = false;
  
  


  constructor(private service:ApiserviceService, public dialog: MatDialog,private route:Router, private formBuilder : FormBuilder, private router:ActivatedRoute, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    //  this.leaderForm = this.formBuilder.group({
    //    name:['',Validators.required, Validators.pattern('[a-zA-z]*')],
    //    surname:['',Validators.required , Validators.pattern('[a-zA-z]*') ],
    //    occupation:['',Validators.required],
    //    image:['', Validators.required],
    //    category:['',Validators.required],
    //    description:['',Validators.required],
      
    //  })



    this.leaderForm = new FormGroup({

     
      "name": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z ]*')]),///
      "surname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z ]*')]),
      "occupation": new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9!@/#-$%^&.,/*() ]+$')]),
      "description": new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9!@/#-$%^&.,/*() ]+$')]),
      "category": new FormControl(null, [Validators.required]),

      
    })

    ///private _Activatedroute:ActivatedRoute

    

      this.router.paramMap.subscribe(params =>{
        
        
        const teamId = params.get('id');
        

        if(teamId)
        {
          this.getTeam(teamId);
        }
      })


  }

  getTeam(id:any)
  {
    this.service.getSpecTeam(id).subscribe(
      (teams: any) => this.editTeam(teams),
      (err:any) => console.log(err)
    );
  }

   leaderForm !: FormGroup;



  public nam :string =''
  public surnam :string =''
  public occupa:string =''
  public catagory:string =''
  public discription:string =''
  public file:string =''
  

   get name(){return this.leaderForm.get('name');}
   get surnames(){return this.leaderForm.get('surname');}
   get occupation(){return this.leaderForm.get('occupation');}
   get image(){return this.leaderForm.get('image');}
   get category(){return this.leaderForm.get('category');}
   get description(){return this.leaderForm.get('description');}

   addLeader(){
     console.log(this.leaderForm.value);
   }



  ///for editing team
  // getTeam(id:any)
  // {

  //   this.service.getSpecTeam(id).subscribe(params =>{

  //     const id = +params.get('id');

  //     if(id)
  //     {
  //       this.getTeams(id)
  //     }
  //   });

  // }


   
  editTeam(teams: any)
  {
    this.leaderForm.patchValue({

      name: teams.name,
      surname: teams.surname,
      occupation: teams.occupation,
      description: teams.description,
      category: teams.category,
    })
  }
  

    uploadsss(event: any)
    {
     this.file = event.target.files[0];

    // console.log(this.file);
    }



   clickhandle()
   {


    this.submitted = true;

    if(this.leaderForm.invalid)
    {
      console.log(" invalid ");
    }
    else
    {
      console.log("valid");



      console.log(this.nam)
      console.log(this.surnam)
      console.log(this.occupa)
      console.log(this.catagory)
      console.log(this.discription)
      console.log(this.file)


      let formData = new FormData()
      formData.append("file",this.file)
      formData.append("name",this.nam)
      formData.append("surname",this.surnam)
      formData.append("occupation",this.occupa)
      formData.append("catagory",this.catagory)
      formData.append("description",this.discription)



      this.service.getUploadTeams(formData).subscribe((res)=>{


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
        else if(res.message =="Team updated successfully")
        {

          Swal.fire({
          
            icon: 'success',
            title: 'Team updated successfully!',
            showConfirmButton: false,
            timer: 2500
          })
          this.leaderForm.reset();
        
          this.dialog.closeAll();
        
          
        }else
        {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An error occured!',
          
          })

        }

      });
    }




   }


}