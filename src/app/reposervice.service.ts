import { Injectable } from '@angular/core';
import { Repositories } from './repositories';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.prod';
import { UserServiceService } from './user-service.service';



@Injectable({
  providedIn: 'root'
})
export class ReposerviceService {
  allRepos!:Repos;
  private myname!:string;
  private reponame!:string;
  private clientID!: 'Iv1.adffa77413217ae0';
  private clientSecret!:'627704f11b12ca5a8b8a6579747f5fd57bf1c6c5';



  constructor( private http:HttpClient) { 
    // this.gotUser = new User("","","","",0,0,0,"",new Date);
    this.allRepos= new Repos("","",0,0,"","",new Date,);
    this.myname = 'CynthiaOuma12673';
    this.reponame = '/repos';
  }
  searchRepositories(){
    interface Repos{
      name:string,
      html_url:string,
      description:string,
      fork:number,
      watching:number,
      languages:string,
      created_at:Date,
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repos>(environment.apiUrl + this.myname + this.reponame + "?clientID="+ this.clientID + "&clientSecret="+this.clientSecret).toPromise().then(
        (response) => {
          this.allRepos.name=response!.name,
          this.allRepos.html_url=response!.html_url,
          this.allRepos.fork=response!.fork,
          this.allRepos.languages=response!.languages,
          this.allRepos.watching = response!.watching,
          this.allRepos.created_at=response!.created_at,
          this.allRepos.description=response!.description

          resolve(null);
        },
        (error) => {
          console.log('enter your repo name')
          reject(error);
        });
    });
    return Promise
  }
}
