import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Musician } from '../model/musician.model';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Musician[]>(this.baseUrl);
  }
  getOne(id:number) {
    return this.http.get<Musician>(`${this.baseUrl}/${id}`);
  }
  createMusician(body: Musician) {
    return this.http.post<Musician>(this.baseUrl, body);
  }
  updateMusician(id: number, body: Musician) {
    return this.http.put<Musician>(`${this.baseUrl}/${id}`, body);
  }
  deleteMusician(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
