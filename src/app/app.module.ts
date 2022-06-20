import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component'
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Injectable } from '@angular/core';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { TestingComponent } from './testing/testing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ParticipantComponent } from './participant/participant.component';
import { LayoutComponent } from './layout/layout.component';
import { AnnoucementComponent } from './annoucement/annoucement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RewardComponent } from './reward/reward.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PublicAnnoucementComponent } from './public-annoucement/public-annoucement.component';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent } from './dialog/dialog.component';
import { TeamComponent } from './team/team.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TeamsComponent } from './teams/teams.component';
import { StripTagsComponent } from './strip-tags/strip-tags.component';
import { RulesComponent } from './rules/rules.component';
import { PublicTeamsComponent } from './public-teams/public-teams.component';
import { LogoutComponent } from './logout/logout.component';
import { PostComponent } from './post/post.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PublicGalleryComponent } from './public-gallery/public-gallery.component';
import { EditdialogComponent } from './editdialog/editdialog.component';
import { AnnouncementlistComponent } from './announcementlist/announcementlist.component';
import { NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    RewardsComponent,
    GalleryComponent,
    LoginAdminComponent,
    RegistrationFormComponent,
    AdminboardComponent,
    TestingComponent,
    SignUpComponent,
    UserLoginComponent,
    ParticipantComponent,
    LayoutComponent,
    AnnoucementComponent,
    SidebarComponent,
    RewardComponent,
    PublicAnnoucementComponent,
    TestComponent,
    FooterComponent,
    DialogComponent,
    TeamComponent,
    TeamsComponent,
    StripTagsComponent,
    RulesComponent,
    PublicTeamsComponent,
    LogoutComponent,
    PostComponent,
    PublicGalleryComponent,
    EditdialogComponent,
    AnnouncementlistComponent,
    
    
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    CKEditorModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
 


    
    

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


