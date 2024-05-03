import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MusicianContentComponent} from "../../../profiles/components/musician-content/musician-content.component";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    MusicianContentComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
