import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarContentComponent} from "./public/components/toolbar-content/toolbar-content.component";
import {MusicianContentComponent} from "./profiles/components/musician-content/musician-content.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent, MusicianContentComponent, FooterContentComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TF-OpenSource';
}
