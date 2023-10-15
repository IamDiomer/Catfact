import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gato } from '../models/gato';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) {}

  getCatFact(): Observable<Gato> {
    return this.http.get<Gato>(this.apiUrl);
  }
}
