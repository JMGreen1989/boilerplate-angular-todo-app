import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get('http://localhost:3001/api/getalltasks')
  }
}
