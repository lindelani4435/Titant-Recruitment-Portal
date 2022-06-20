import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private service:ApiserviceService, private route:Router) { }

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

  // public date:any;
  // myFunction(){
  //   this.date =new Date();
  //   let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  //  }

}
