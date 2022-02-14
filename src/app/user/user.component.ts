import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Repositories } from '../repositories';
import { User}from '../user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  gotUser!: User;
  // repositories!: Repositories;

  constructor(
    private myservice:UserServiceService, 
    // private repositoriesService:UserServiceService
  ) { }

  //  searching (searchUsername:any){
  //    this.myservice.gotUser(searchUsername).then(
  //     (success=>{
  //       this.user = this.myservice.gotUser;
  //     })
  //     this.repositoriesService.searchRepositories(searchUsername).then(
  //       (results)=>{
  //         this.repositories=this.repositoriesService.allRepositories

  //       }
  //     )
  //   )
  // }

  ngOnInit():void{
    // this.searching('CynthiaOuma12673');
    this.myservice.searchUSer()
    this.gotUser=this.myservice.gotUser;
  }


}
