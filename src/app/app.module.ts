import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AlbumComponent } from './album/album.component';
import { MusiqueComponent } from './musique/musique.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'album',component: AlbumComponent },
  { path: 'musique',component: MusiqueComponent },
  { path: 'accueil',component: AccueilComponent },
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }*/
];
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
	NavigationComponent,
    AlbumComponent,
    MusiqueComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
