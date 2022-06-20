import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }

  countDownDate = new Date();

  days:any = 45;
  hours:any = 20;
  min:any = 35;
  secs:any = 3;
  daysN = "Days";
  hoursN = "Hours";
  minN:any ="Minutes";
  secsN:any ="Seconds"


  exp:any ="Competition Expired";

  x = setInterval(()=>{

    var futureDate = new Date("March 27, 2022 01:31:24 ").getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;

    this.days = Math.floor(distance/(1000 * 60 * 60 * 24 ));
    this.hours = Math.floor((distance %(1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
    this.min = Math.floor((distance %(1000 * 60 * 60)) /(1000 * 60 ));
    this.secs = Math.floor((distance %(1000 * 60 )) /(1000 ));


    

    if(distance < 0)
    {
      clearInterval(this.x)
      this.days =" Expired";
      this.hours =" ";
      this.min = " ";
      this.secs =" ";
      this.daysN = " ";
      this.hoursN = " ";
      this.minN = " ";
      this.secsN = " ";
      this.exp;


    }



  }, 1000)



}
