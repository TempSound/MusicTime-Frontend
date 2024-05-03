import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatCardContent,
    MatButton,
    MatCardActions
  ],
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  buttonText1 = 'Subscribe';
  buttonText2 = 'Subscribe';

  activateSubscription1() {
    if (this.buttonText1 === 'Subscribe') {
    console.log('Subscription 1 activated');
    this.buttonText1 = 'Activated';
  }
    else {
    console.log('Subscription 1 deactivated');
    this.buttonText1 = 'Subscribe';
  }
  }

  activateSubscription2() {
    if (this.buttonText2 === 'Subscribe') {
      console.log('Subscription 2 activated');
      this.buttonText2 = 'Activated';
    }
    else {
      console.log('Subscription 2 deactivated');
      this.buttonText2 = 'Subscribe';
    }
  }
}
