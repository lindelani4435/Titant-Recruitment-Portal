import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcements } from './interfaces/announcements';
import { TeamsComponent } from './teams/teams.component';



@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }




  ////connection for frontend and backend

    apiUrl = 'http://localhost:9002/login'; //Adminlogin

    apeUrl = 'http://localhost:9002/registrations'; ///userFormRegistration

    apqUrl = 'http://localhost:9002/adminLoadFile'; //admin View Data From Database


    apwUrl = 'http://localhost:9002/noticeLoadFile'; //Notice display Data From Database
    appUrl = 'http://localhost:9002/countApp'; //Apllication counts 
    teamsUrl = 'http://localhost:9002/countTeam'; //Team counts 
    orgUrl = 'http://localhost:9002/selectOrganiser'; //Teams display Data From Database
    volUrl = 'http://localhost:9002/selectVolunteer'; //Volunteer display Data From Database
    mentUrl = 'http://localhost:9002/selectMentor'; //Mentor display Data From Database
    orgTeUrl = 'http://localhost:9002/selectOrgTeam'; //OrgTeam display Data From Database
    teamUrl = 'http://localhost:9002/selectTeam'; //Team display Data From Database


    apaUrl = 'http://localhost:9002/signUp'; /// Signup for users

    apkUrl = 'http://localhost:9002/userLogin'; /// Users login

    apmUrl = 'http://localhost:9002/notice'; /// announcement

    uploadUrl = 'http://localhost:9002/uploadTeam '; ///uploadTeams
    rewardsUrl = 'http://localhost:9002/uploadRewards '; ///uploadRewards
    deletUrl = 'http://localhost:9002/deleteMember'; ///DeleteTeams
    delantUrl = 'http://localhost:9002/deleteAnnouncement'; ///DeleteAnnouncement
    specTeaUrl = 'http://localhost:9002/viewTeamMember'; ///select specific team using id 



    

    ///get data post admin data to the database from login
    getAllData(credintials : any)
    {
      return this._http.post<any>(this.apiUrl, credintials);

      
    }

    //get data from frontend store it to the database

    getRegistration(credintials:any)
    {
      return this._http.post<any>(this.apeUrl, credintials );
    }

    ///retrieve data from database to admin dashboard
    getadminLoadFile():Observable<any>
    {
      return this._http.get(`${this.apqUrl}`);
    }

        ///retrieve data from database to admin dashboard
    getnoticeLoadFile():Observable<Announcements>
    {
          return this._http.get<Announcements>(`${this.apwUrl}`);
    }

  ///Count applications
    getCountApp():Observable<any>
    {
          return this._http.get<any>(`${this.appUrl}`);
    }

  ///Count teams
  getCountTeams():Observable<any>
  {
        return this._http.get<any>(`${this.teamsUrl}`);
  }
//--------------------------------------------------TEAMS---------------------------------//
    ///Organiser
    getOrginiser():Observable<any>
    {
      return this._http.get(`${this.orgUrl}`);
    }

        ///Team
        getTeam():Observable<any>
        {
          return this._http.get(`${this.teamUrl}`);
        }

    ///Volunteer
    getVolunteer():Observable<any>
    {
      return this._http.get(`${this.volUrl}`);
    }

    ///Mentor
    getMentor():Observable<any>
    {
      return this._http.get(`${this.mentUrl}`);
    }

    ///OrganiserTeam
    getOrgTeam():Observable<any>
    {
      return this._http.get(`${this.orgTeUrl}`);
    }
//--------------------------------------------------END_TEAMS---------------------------------//

     //post using signup
    getSignup(credintials:any)
    {
      return this._http.post<any>(this.apaUrl, credintials );
    }

    //userLogin function

    getLogin(credintials : any)
    {
      return this._http.post<any>(this.apkUrl, credintials);

      
    }

    //Get announcement data from admin store it to the database

    getAnnouncement(credintials:any)
    {
        return this._http.post<any>(this.apmUrl, credintials );
    }

        //get file upload data from frontend store it to the database

    getUploadTeams(credintials:any)
    {
      return this._http.post<any>(this.uploadUrl, credintials );
    }

    //get file upload for reward from frontend store it to the database

    getUploadRewards(credintials:any)
    {
      return this._http.post<any>(this.rewardsUrl, credintials );
    }

    ///delete team

    deleteData(id:any):Observable<any>
    {
      let ids = id;
      return this._http.delete(`${this.deletUrl}/${ids}`);
    }

    ///delete announcement

    deleteAnnounceData(id:any):Observable<any>
    {
      let ids = id;
      return this._http.delete(`${this.delantUrl}/${ids}`);
    } 


    //select specific team
    getSpecTeam(id:any):Observable<any>
    {
        
          return this._http.get<any>(`${this.specTeaUrl}/${id}`);
    }
}
