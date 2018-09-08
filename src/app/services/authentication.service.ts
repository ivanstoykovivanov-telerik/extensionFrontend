import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../services/auth.constant';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  // static AUTH_TOKEN = 'http://localhost:8080/oauth/token';

  // constructor(public http: HttpClient) { }
    
  // loginAut(username: string, password: string) {
  //   const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

  //   return this.http.post(AuthenticationService.AUTH_TOKEN, body, {headers})
  // }

  constructor(public http: HttpClient) {

   }

  //  login(username: string, password: string){

  //   return this.http.post(username, password); 
  //  }


}
