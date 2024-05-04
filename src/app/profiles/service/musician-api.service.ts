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
  private apiUrl = 'https://musicianapp.azurewebsites.net/musician';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Musician[]>(this.baseUrl);
  }
  getOne(_id:number) {
    return this.http.get<Musician>(`${this.baseUrl}/${_id}`);
  }
  createMusician(body: Musician) {
    return this.http.post<Musician>(this.apiUrl, body);
  }
  updateMusician(_id: number, body: Musician) {
    return this.http.put<Musician>(`${this.baseUrl}/${_id}`, body);
  }
  deleteMusician(_id: number) {
    return this.http.delete(`${this.baseUrl}/${_id}`);
  }
  getMusician(_id: string): Observable<Musician> {
    const url = `${this.apiUrl}/${_id}`;
    return this.http.get<Musician>(url);
  }
}
