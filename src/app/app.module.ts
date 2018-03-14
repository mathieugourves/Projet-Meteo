import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AlbumComponent } from './album/album.component';
import { MusiqueComponent } from './musique/musique.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccueilComponent } from './accueil/accueil.component';

import { MusiqueService } from './services/musique/musique.service';
import { ArtisteService } from './services/artiste/artiste.service';
import { ProfileArtisteComponent } from './artiste/profile-artiste/profile-artiste.component';
import { ListArtisteComponent } from './artiste/list-artiste/list-artiste.component';
import { InscriptionComponent } from './inscription/inscription.component';

const appRoutes: Routes = [
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'navigation', component: NavigationComponent },
    { path: 'album', component: AlbumComponent },
    { path: 'musique', component: MusiqueComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'listArtiste', component: ListArtisteComponent },
    { path: 'profilArtiste', component: ProfileArtisteComponent },
    //A laisser en dernier car chemin par défaut
    { path: '**', component: AccueilComponent }
];
@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations: [
        AppComponent,
        ConnexionComponent,
        NavigationComponent,
        AlbumComponent,
        MusiqueComponent,
        AccueilComponent,
        ProfileArtisteComponent,
        ListArtisteComponent,
        InscriptionComponent
    ],

    providers: [
        MusiqueService,
        ArtisteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
