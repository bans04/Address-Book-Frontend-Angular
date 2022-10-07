import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/user/"

  addUser(person: Person): Observable<Person>{
    return this.http.post(this.baseUrl + "create", person)
  }

  getUsers(): Observable<Person>{
    return this.http.get(this.baseUrl + "users" )
  }

  getUser(userId: number){
    return this.http.get(this.baseUrl + "user?userId=" + userId)
  }

  removeUser(userId: number){
    return this.http.delete(this.baseUrl + "delete?userId=" + userId)
  }

  updateUser(userId: number, user: any){
    return this.http.put(this.baseUrl + "update?userId=" + userId, user)
  }


}
