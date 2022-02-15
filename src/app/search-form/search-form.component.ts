import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Repositories } from '../repositories';
import { UserServiceService } from '../user-service.service'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchUsername!:string;
  


  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

search(){
  this.userService.searchUSer();
}

}
