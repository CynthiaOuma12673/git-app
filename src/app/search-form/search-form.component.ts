import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchUsername!:string;
  @Output() searchResult = new EventEmitter<any>()


  constructor() { }

  ngOnInit(): void {
  }

search(){
  this.searchResult.emit(this.searchUsername)
  this.searchUsername = '';
}

}
