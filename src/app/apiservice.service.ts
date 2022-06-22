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

    apiUrl = 'https://tvh20211.herokuapp.com/login'; //Adminlogin

    apeUrl = 'https://tvh20211.herokuapp.com/registrations'; ///userFormRegistration

    apqUrl = 'https://tvh20211.herokuapp.com/adminLoadFile'; //admin View Data From Database


    apwUrl = 'https://tvh20211.herokuapp.com/noticeLoadFile'; //Notice display Data From Database
    appUrl = 'https://tvh20211.herokuapp.com/countApp'; //Apllication counts
    teamsUrl = 'https://tvh20211.herokuapp.com/countTeam'; //Team counts
    orgUrl = 'https://tvh20211.herokuapp.com/selectOrganiser'; //Teams display Data From Database
    volUrl = 'https://tvh20211.herokuapp.com/selectVolunteer'; //Volunteer display Data From Database
    mentUrl = 'https://tvh20211.herokuapp.com/selectMentor'; //Mentor display Data From Database
    orgTeUrl = 'https://tvh20211.herokuapp.com/selectOrgTeam'; //OrgTeam display Data From Database
    teamUrl = 'https://tvh20211.herokuapp.com/selectTeam'; //Team display Data From Database


    apaUrl = 'https://tvh20211.herokuapp.com/signUp'; /// Signup for users

    apkUrl = 'https://tvh20211.herokuapp.com/userLogin'; /// Users login

    apmUrl = 'https://tvh20211.herokuapp.com/notice'; /// announcement

    uploadUrl = 'https://tvh20211.herokuapp.com/uploadTeam '; ///uploadTeams
    rewardsUrl = 'https://tvh20211.herokuapp.com/uploadRewards '; ///uploadRewards
    deletUrl = 'https://tvh20211.herokuapp.com/deleteMember'; ///DeleteTeams
    delantUrl = 'https://tvh20211.herokuapp.com/deleteAnnouncement'; ///DeleteAnnouncement
    specTeaUrl = 'https://tvh20211.herokuapp.com/viewTeamMember'; ///select specific team using id





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
