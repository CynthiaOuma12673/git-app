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
  searchName!:string;
  @Output() searchOutput = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }
}
