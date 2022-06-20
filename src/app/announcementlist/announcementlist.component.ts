import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import { Announcements } from '../interfaces/announcements';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-announcementlist',
  templateUrl: './announcementlist.component.html',
  styleUrls: ['./announcementlist.component.css']
})
export class AnnouncementlistComponent implements OnInit {

  constructor(private service:ApiserviceService, private route:Router) { }

  announcements:any;
  // announcements!: Announcements[];

  ngOnInit(): void {

    this.service.getnoticeLoadFile().subscribe((res:any) =>{
      console.log(res, "res==>");


      this.announcements = res.data;
      // console.log(this.announcements[0].title)
  })

  }


  removeHTML(str:any){ 
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
}


  deletID(id:any)
  {

    console.log(id, "Delete");

    this.service.deleteAnnounceData(id).subscribe((res)=>{

      if(res.message =="Unable to delete announcements!!!")
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Unable to delete announcements!',
  
        })


      }
      else if(res.message =="Announcement successfully deleted✔✔✔")
      {




        /////////


        Swal.fire({
          title: 'Are you sure, You want to delete this announcement?',
         
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

            Swal.fire({
          
              icon: 'success',
              title: 'Announcement successfully deleted',
              showConfirmButton: false,
              timer: 2500
            })
          }
        })



      }

    })



  }

}
