import { UserServiceService } from './../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { User } from '../user';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
    repo!: Repositories[];
    allRepos!:Repositories;
    private myname!:string;
  private reponame!:string;
  private clientID!: 'Iv1.adffa77413217ae0';
  private clientSecret!:'627704f11b12ca5a8b8a6579747f5fd57bf1c6c5';

  

  constructor(private http:HttpClient, public repoService:UserServiceService) {
    this.allRepos= new Repositories("","",0,0,"","",new Date,);
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
  }

    // searchRepositories(){
    //   this.repoService.searchRepositories().then(
    //     (result:any)=>{
    //       this.repo=this.repoService.allRepos

    //     },
    //     (error:any)=>{
    //       console.log(error);
    //     }
    //   );
    // }
  
  ngOnInit():void{
    this.repoService.searchRepositories()
    this.allRepos=this.repoService.allRepos

    // this.http.get<Repositories>(environment.apiUrl + this.myname + this.reponame + "?clientID="+ this.clientID + "&clientSecret="+this.clientSecret).subscribe(data=>{
      // Succesful API request
      // this.allRepos= new Repositories("","",0,0,"","",new Date,);

      // }
    // )
  }
}
