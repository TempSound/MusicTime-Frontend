import { Component } from '@angular/core';
import {MusicianContentComponent} from "../../components/musician-content/musician-content.component";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle,
  MatCardSubtitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {ProfileMusicianComponent} from "../../components/profile-musician/profile-musician.component";


@Component({
  selector: 'app-musician-view',
  standalone: true,
  imports: [
    MusicianContentComponent,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCardImage,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    MusicianContentComponent,
    ProfileMusicianComponent
  ],
  templateUrl: './musician-view.component.html',
  styleUrl: './musician-view.component.css'
})
export class MusicianViewComponent {


}
