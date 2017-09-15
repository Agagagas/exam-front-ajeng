import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class APIServiceService {
  UserList : object[] = [];

  constructor(private http:Http) { }

  GetAllUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      result => {
        for (var i = 0; i < result.json().length; i++) {
          var user = result.json()[i];
          this.UserList.push({
            "name" : user.name,
            "email" : user.email,
            "address" : user.address,
            "company" : user.company,
          }) 
        }
      },
      error => {console.log(error);}
    )
  }

}
