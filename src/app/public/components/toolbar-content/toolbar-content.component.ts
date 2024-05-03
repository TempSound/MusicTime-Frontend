import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'toolbar-content',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbar,
    MatIconButton
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}
