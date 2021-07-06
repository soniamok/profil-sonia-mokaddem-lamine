import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { CompetencesComponent } from './competences/competences.component';
import { PiedComponent } from './pied/pied.component';
import { Erreur404Component } from './systeme/erreur404/erreur404.component';


const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'apropos',component:AproposComponent},
  {path:'competences',component:CompetencesComponent},
  {path:'pied',component:PiedComponent},
  {path:'**',component:Erreur404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
