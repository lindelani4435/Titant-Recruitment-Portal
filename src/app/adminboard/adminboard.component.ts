import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

 constructor( private service:ApiserviceService, private route:Router) { }
 readData:any;
 readDat:any;
 ngOnInit(): void {

    this.service.getCountApp().subscribe((res) =>{
      console.log(res, "res==>");

      this.readData = res.data;
  })


  
     this.service.getCountTeams().subscribe((res) =>{
       console.log(res, "res==>");
 
       this.readDat = res.data;
   })
    
  }

 
    


}
