import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PostComponent } from '../post/post.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog, private route:Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  opeDialog() {
    this.dialog.open(PostComponent, {
      width: '30%',
      height: '60%'
    });
  }

  check()
  {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {

        this.route.navigate([""])
      }
    })
  }

}
