import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import { Announcements } from '../interfaces/announcements';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-public-annoucement',
  templateUrl: './public-annoucement.component.html',
  styleUrls: ['./public-annoucement.component.css']
})
export class PublicAnnoucementComponent implements OnInit {

  constructor(private service:ApiserviceService, private route:Router) { }

  readData:any;
  announcements!: Announcements[];

  ngOnInit(): void {


    this.service.getnoticeLoadFile().subscribe((res:any) =>{
      console.log(res, "res==>");


      this.announcements = res.data;
      console.log(this.announcements[0].title)
  })
  }



  removeHTML(str:any){ 
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
}

}
