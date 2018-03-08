import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AlbumComponent } from './album/album.component';
import { MusiqueComponent } from './musique/musique.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ArtisteComponent } from './artiste/artiste.component';

import {MusiqueService} from './services/musique/musique.service';
import {ArtisteService} from './services/artiste/artiste.service';
const appRoutes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'album',component: AlbumComponent },
  { path: 'musique',component: MusiqueComponent },
  { path: 'accueil',component: AccueilComponent },
  { path: 'artiste',component: ArtisteComponent },
  //A laisser en dernier car chemin par défaut
  { path: '**', component: AccueilComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
	NavigationComponent,
    AlbumComponent,
    MusiqueComponent,
    AccueilComponent,
    ArtisteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
      MusiqueService,
      ArtisteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
