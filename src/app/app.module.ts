import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { HistoriqueVotesComponentComponent } from './historique-votes-component/historique-votes-component.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AfficheCollegueComponent } from './affiche-collegue/affiche-collegue.component';
import { FormsModule } from '@angular/forms';
import { AjouterCollegueComponent } from './ajouter-collegue/ajouter-collegue.component';
import { ScorePipe } from './pipes/score.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';
const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponentComponent }, // /page1 affiche le composant A

  { path: 'demo', component: CarouselComponent }, // /page2 affiche le composant B
  { path: 'collegues/:pseudo', component: AfficheCollegueComponent },
  { path: 'new', component: AjouterCollegueComponent }, // /page2 affiche le composant B

];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponentComponent,
    HistoriqueVotesComponentComponent,
    MenuComponentComponent,
    AccueilComponentComponent,
    CarouselComponent,
    AfficheCollegueComponent,
    AjouterCollegueComponent,
    ScorePipe,
    FilterPipe,
    VotreDernierAvisComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
