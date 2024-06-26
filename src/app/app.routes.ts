import { HomePageComponent } from "./public/pages/home-page/home-page.component";
import { AboutPageComponent } from "./public/pages/about-page/about-page.component";
import { MusicianViewComponent } from "./profiles/pages/musician-view/musician-view.component";
import { Routes } from "@angular/router";
import { EditCreateMusicianComponent } from "./profiles/components/edit-create-musician/edit-create-musician.component";
import {SubscriptionComponent} from "./public/pages/subscription/subscription.component";
import {ProfileMusicianComponent} from "./profiles/components/profile-musician/profile-musician.component";

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'musician', component: MusicianViewComponent },
  { path: 'create-musician', component: EditCreateMusicianComponent },
  { path: 'edit-musician/:id', component: EditCreateMusicianComponent },
  { path: 'subscription', component: SubscriptionComponent },

  { path: 'musicians/:id', component: ProfileMusicianComponent },


  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirige a 'home' cuando la ruta es vacía
];
