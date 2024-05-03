import { Component } from '@angular/core';
import {MusicianContentComponent} from "../../../profiles/components/musician-content/musician-content.component";

@Component({
  selector: 'about-page',
  standalone: true,
    imports: [
        MusicianContentComponent
    ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
