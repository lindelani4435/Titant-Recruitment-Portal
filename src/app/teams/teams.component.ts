import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import {ApiserviceService} from '../apiservice.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {


  check =[

    {select:false}

  ];

  isTicked:boolean;
  IsIndeterminate:boolean;

  constructor(public dialog: MatDialog, private service:ApiserviceService, private route:Router, private formBuilder : FormBuilder) {


    this.isTicked = false;
    this.IsIndeterminate =false;
   }


  team:any;

  ngOnInit(): void {

    this.service.getTeam().subscribe((res) =>{
      console.log(res, "res==>");

      this.team = res.data;
  })


  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
      height: '60%'
    });
  }

  public id: any;
  public isChecked: any;

  toggleEditable(event:any) {
    if ( event.target.checked ) {

      this.id = event.target.value;
      console.log("Checked")
      console.log(this.id)

      this.isChecked = true;

      return this.isChecked
       
   }
   else
   {


    console.log("Not Checked")
    this.isChecked = false;

    return this.isChecked
   }
}


dele()
{

  if(this.id == null)
  {
    console.log("nothing")
  }
  else
  {
    console.log(this.id)

  }

}


deletID(id:any)
{

  console.log(id, "Delete");

  this.service.deleteData(id).subscribe((res)=>{

    if(res.message =="Unable to move data!!!")
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Unable to move data!',
  
        })

      }
      else if(res.message =="Unable to delete data!!!")
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Unable to delete data!',
  
        })

      }
      else if(res.message =="Team Member Data successfully deleted✔✔✔")
      {


        Swal.fire({
          title: 'Are you sure, You want to delete?',
         
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

            Swal.fire({
          
              icon: 'success',
              title: 'Team Member Data successfully deleted',
              showConfirmButton: false,
              timer: 2500
            })
          }
        })

      }



  })

}

//edit button for teams

editButtonClick(teamId:any)
{
  this.route.navigate(['/dialog/edit', teamId]);

  console.log("check here");

}


}
