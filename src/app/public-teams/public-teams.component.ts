import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-public-teams',
  templateUrl: './public-teams.component.html',
  styleUrls: ['./public-teams.component.css']
})
export class PublicTeamsComponent implements OnInit {

  

  constructor(private service:ApiserviceService, private route:Router) { }
  oganizer:any;
  volunteer:any;
  mentor:any;
  orgteam:any;
  showMe:boolean = true

  ngOnInit(): void {

    this.service.getOrginiser().subscribe((res) =>{
      console.log(res, "res==>");

      this.oganizer = res.data;
  })


  this.service.getVolunteer().subscribe((res) =>{
    console.log(res, "res==>");

    this.volunteer = res.data;
})


this.service.getMentor().subscribe((res) =>{
  console.log(res, "res==>");

  this.mentor = res.data;
})

this.service.getOrgTeam().subscribe((res) =>{
  console.log(res, "res==>");

  this.orgteam = res.data;
})


  }

  

  theMenu()
  {
    this.showMe=!this.showMe
  }

}
