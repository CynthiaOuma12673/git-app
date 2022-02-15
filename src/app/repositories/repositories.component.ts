import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { ReposerviceService } from '../reposervice.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
    repo!: Repos;
  

  constructor(
    public repoService:ReposerviceService) {}

    searchRepositories(){
      this.repoService.searchRepositories().then(
        (result:any)=>{
          this.repo=this.repoService.allRepos

        }
      )
    }
  
  ngOnInit():void{
    this.searchRepositories()

  }

}
