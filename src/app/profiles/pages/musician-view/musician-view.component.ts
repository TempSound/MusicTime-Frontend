import { Component } from '@angular/core';
import {MusicianContentComponent} from "../../components/musician-content/musician-content.component";

@Component({
  selector: 'app-musician-view',
  standalone: true,
  imports: [
    MusicianContentComponent
  ],
  templateUrl: './musician-view.component.html',
  styleUrl: './musician-view.component.css'
})
export class MusicianViewComponent {

}
