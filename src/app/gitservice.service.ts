import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
 
@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  constructor(private httpClient: HttpClient) { }

  searchUser(name ='vijay') {
    return this.httpClient.get(`https://api.github.com/search/users?q=${name}`);
  }


  getUserDetailById(username) {
    return this.httpClient.get(`https://api.github.com/users/${username}/repos`);
  }

}
