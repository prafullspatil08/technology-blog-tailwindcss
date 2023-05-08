import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIEndPoint } from 'src/app/_miscellaneous/ApiEndPoint';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  login(){
    return this.http.get(APIEndPoint.ENDPOINT_URL + 'users');
  }

  signUp(payload:any){
    console.log("hii",payload);
    return this.http.post(APIEndPoint.ENDPOINT_URL + 'users', payload);
  }
}
