import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _apiUrl = "http://localhost:8080/api/contacts";
  constructor(private _http: HttpClient) { }

  findAll() {
    return this._http.get(`${this._apiUrl}`);
  }

  findById(id){
    return this._http.get(`${this._apiUrl}/${id}`);
  }

  search(term){
    return this._http.get(`${this._apiUrl}/search?term=${term}`);
  }

  add(contact){
    return this._http.post(`${this._apiUrl}`, contact);
  }
  
  edit(contact){
    return this._http.put(`${this._apiUrl}/${contact.id}`, contact);
  }

  delete(id){
    return this._http.delete(`${this._apiUrl}/${id}`);
  }
}
