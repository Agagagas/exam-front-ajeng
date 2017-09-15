import { Component, OnInit } from '@angular/core';

import { APIServiceService } from "../apiservice.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private data : APIServiceService) { }

  ngOnInit() {
    console.log(this.data.UserList)
  }

  name : string;
  email : string;
  address : string;
  phone : string;
  company : string;

  AddUser() : void{
    if (this.name != "", this.email != "", this.address != "", this.phone != "", this.company != ""){
      var user : object = {"name" : this.name, "email" : this.email, "address" : this.address, "phone" : this.phone, "company" : this.company}
      this.data.UserList.push(user);
      this.name = "";
      this.email = "";
      this.address = "";
      this.phone = "";
      this.company = "";
    }
  }

}
