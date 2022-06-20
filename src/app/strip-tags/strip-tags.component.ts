import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-strip-tags',
  templateUrl: './strip-tags.component.html',
  styleUrls: ['./strip-tags.component.css']
})
export class StripTagsComponent implements OnInit {


  // transform(text: string, ...usefullTags:any[]):string{

  //   return usefullTags.length >0
  //   ?text.replace(new RegExp(`<(?!\/?(${usefullTags.join()}`))
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
