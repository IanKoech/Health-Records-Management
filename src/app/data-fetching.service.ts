import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  submitData(data: any): Observable<any> {
    const url = `${this.apiUrl}/submit`; // Replace with the submit API endpoint
    return this.http.post(url, data);
  }

  fetchData(): Observable<any> {
    const url = `${this.apiUrl}/data`; // Replace with the fetch API endpoint
    return this.http.get(url);
  }
}
