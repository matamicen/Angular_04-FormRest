import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class FormService {

  altaUserURL:string = "http://localhost:8080/contacts";
  getAllUsersURL:string = "http://localhost:8080/contacts";

  constructor(private http:Http) { }

   altaUsuario(user:any){

    let body = JSON.stringify(user);
    let header = new Headers({'Content-Type':'application/json'});

    return this.http.post(this.altaUserURL, body, {headers: header})
        .map(res =>{
          console.log(res.json());
          return res.json();
        });
   }

   getAllUsers(){
   
   // let body = JSON.stringify(user);
    let header = new Headers({'Content-Type':'application/json'});

    return this.http.get(this.getAllUsersURL, {headers: header})
        .map(res =>{
          console.log(res.json());
          return res.json();
        });

   }


}
