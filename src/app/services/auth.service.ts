import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppComponent} from "../app.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  
  // constructor(public http: Http) { }
  constructor(public http: HttpClient) { }

  public logIn(user: User){
    // let headers = new Headers();
    // headers.append('Accept', 'application/json')
    // // creating base64 encoded String from user name and password
     var base64Credential: string = btoa( user.username+ ':' + user.password);
    // headers.append("Authorization", "Basic " + base64Credential);

    // let options = new RequestOptions();
    // options.headers=headers;
    
    //My headers  : 
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set("Authorization", "Basic " + base64Credential); 

    //return this.http.get(AppComponent.API_URL+"/account/login" ,  options)    // -> old version
    return this.http.get(AppComponent.API_URL+"/account/login" ,  {headers} )
      .subscribe((response: Response) => {
      // login successful if there's a jwt token in the response
      let user = response.json().principal;// the returned user object is a principal object
      if (user) {
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });
  }

  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"logout",{})
      .subscribe((response: Response) => {
        localStorage.removeItem('currentUser');
      });
  }

}