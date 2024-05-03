import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Musician} from "../../model/musician.model";
import {MusicianService} from "../../service/musician-api.service";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'musician-card',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButton, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, NgForOf, AsyncPipe, RouterLink],
  templateUrl: './musician-card.component.html',
  styleUrl: './musician-card.component.css'
})
export class MusicianCardComponent {
  musicians$: Observable<any>;

  constructor(private http: HttpClient) {
    this.musicians$ = this.http.get('https://my-json-server.typicode.com/VictorHerrera10/VictorHerrera10-db/musician');
  }
}
