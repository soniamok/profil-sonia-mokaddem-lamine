import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms'
import{ HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { CompetencesComponent } from './competences/competences.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { Erreur404Component } from './systeme/erreur404/erreur404.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AproposComponent,
    CompetencesComponent,
    MenuComponent,
    PiedComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
