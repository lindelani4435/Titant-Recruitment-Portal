
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  name: string;
  surname: number;
  category: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'surname', 'category', 'description'];
  dataSource = ELEMENT_DATA;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '40%',
      height: '80%'
    });
  }

}
