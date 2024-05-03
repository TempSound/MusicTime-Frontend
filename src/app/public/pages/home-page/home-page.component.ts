import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MusicianContentComponent} from "../../../profiles/components/musician-content/musician-content.component";
import {MusicianCardComponent} from "../../../profiles/components/musician-card/musician-card.component";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    MusicianContentComponent,
    MusicianCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
