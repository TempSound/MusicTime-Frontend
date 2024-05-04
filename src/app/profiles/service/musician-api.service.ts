import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musician } from '../model/musician.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  baseUrl: string = environment.baseUrl;
  private apiUrl = 'http://localhost:3000/musician';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Musician[]>(this.baseUrl);
  }
  getOne(id:number) {
    return this.http.get<Musician>(`${this.baseUrl}/${id}`);
  }
  createMusician(body: Musician) {
    return this.http.post<Musician>(this.apiUrl, body);
  }
  updateMusician(id: number, body: Musician) {
    return this.http.put<Musician>(`${this.baseUrl}/${id}`, body);
  }
  deleteMusician(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getMusician(id: string): Observable<Musician> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Musician>(url);
  }
}
