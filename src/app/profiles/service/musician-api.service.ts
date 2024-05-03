import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musician } from '../model/musician.model';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  private apiUrl = 'http://localhost:3000/musician'; // Ajusta esto a tu API

  constructor(private http: HttpClient) { }

  getMusician(id: string): Observable<Musician> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Musician>(url);
  }

  // Otros métodos...
}
