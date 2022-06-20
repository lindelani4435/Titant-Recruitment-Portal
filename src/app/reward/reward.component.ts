import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  constructor() { }

  showMe:boolean = true

  ngOnInit(): void {
  }

  theMenu()
  {
    this.showMe=!this.showMe
  }

}
