
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User}from '../user';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  gotUser!: User;
  

  constructor(
    private myservice:UserServiceService, 
  ) { }


  ngOnInit():void{
    this.myservice.searchUSer()
    this.gotUser=this.myservice.gotUser;
    
  }


}
