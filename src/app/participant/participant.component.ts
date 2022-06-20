import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  title ='Admin';
  fileName = 'applicants.xlsx';
  status = 'Pending..';

  exportTableToExcel(): void {
    const element = document.getElementById('app-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName)

  }

  getStatusAccepted(us: any){
    console.log("Accepted");
    us.status ="Accepted"
  }
  getStatusRejected(us: any){
    console.log("Rejected");
    us.status ="Rejected"
  }


  constructor( private service:ApiserviceService, private route:Router) { }

  readData:any;
  ngOnInit(): void {

    this.service.getadminLoadFile().subscribe((res) =>{
      console.log(res, "res==>");

      this.readData = res.data;
  })


  }

}
