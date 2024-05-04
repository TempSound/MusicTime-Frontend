import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, of} from 'rxjs';
import {Musician} from "../../model/musician.model";
import {MusicianService} from "../../service/musician-api.service";
import {MatButton} from "@angular/material/button";
import { HttpClient } from '@angular/common/http';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterLink} from "@angular/router";



import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'profile-musician',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButton, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, NgForOf, AsyncPipe, NgIf, NgOptimizedImage],
  templateUrl: './profile-musician.component.html',
  styleUrl: './profile-musician.component.css'
})

export class ProfileMusicianComponent implements OnInit {
  musician$: Observable<Musician> = of();

  constructor(
    private route: ActivatedRoute,
    private musicianService: MusicianService
  ) { }

  ngOnInit() {
    const _id = this.route.snapshot.paramMap.get('_id');
    if (_id) {
      this.musician$ = this.musicianService.getMusician(_id);
    }
  }
}
