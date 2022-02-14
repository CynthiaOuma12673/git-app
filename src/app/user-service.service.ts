import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Repositories } from './repositories';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  gotUser!: User;
  allRepositories!: Repositories;
  private myname!:string;
  private reponame!:string;
  private clientID!: 'Iv1.adffa77413217ae0';
  private clientSecret!:'627704f11b12ca5a8b8a6579747f5fd57bf1c6c5';

  constructor(private http: HttpClient) {
    this.gotUser = new User("","","","",0,0,0,"",new Date);
    this.allRepositories = new Repositories("","",0,0,"","",new Date,);
    this.myname = 'CynthiaOuma12673'
    this.reponame = '/repos'
    
  }

  searchUSer() {
    interface Responce {
      // url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
      name:string;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Responce>(environment.apiUrl + this.myname +  "?clientID="+ this.clientID + "&clientSecret="+this.clientSecret).toPromise().then(
        (response) => {
          this.gotUser.name = response!.name,
          this.gotUser.avatar_url =response!.avatar_url,
          this.gotUser.created_at =response!.created_at,
          this.gotUser.followers=response!.followers,
          this.gotUser.following=response!.following,
          this.gotUser.html_url=response!.html_url,
          this.gotUser.location=response!.location,
          this.gotUser.login=response!.login,
          this.gotUser.public_repos=response!.public_repos
          resolve(null);
        },
        (error) => {
          console.log('username not found')
          reject(error)
        });
    });
    return Promise
  }
  // searchRepositories(searchUsername:any){
  //   interface Repos{
  //     name:string;
  //     html_url:string;
  //     description:string;
  //     fork:number;
  //     watching:number;
  //     languages:string;
  //     dateCreated:Date;
  //   }
  //   return new Promise((resolve,reject)=>{
  //     this.http.get<Repos>('https://api.github.com/users/'+searchUsername+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
  //       (results) => {
  //         this.allRepositories = results;
  //         resolve(null);
  //       },
  //       (error) => {
  //         reject();
  //       }
  //     );
  //   });
  // }
}