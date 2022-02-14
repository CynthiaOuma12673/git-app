import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories!:Repositories

  constructor(
    public repositoriesService:UserServiceService
  ) { }
  // repositoriesSearch(searchUsername:any){
  //   this.repositoriesService.searchRepositories(searchUsername).then(
  //     (results)=>{
  //       this.repositories =this.repositoriesService.allRepositories

  //     }
  //   )
  // }

  ngOnInit():void{
    // this.repositoriesSearch('CynthiaOuma12673');
  }

}
