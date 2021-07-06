import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompetencesI } from '../modeles/competences';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  competences: Array<CompetencesI>;//tableau de competences typé


  constructor(private http:HttpClient) {
    //tableau de competences typé
    this.competences = [];
    //on appelle la fonction dans le constructeur directement
    this.getCompetences();
  }
  getCompetences(){
    //on fait appel aux données externes à partir du fichier .json
    this.http.get<Array<CompetencesI>>('assets/competences.json').subscribe(data =>{
    console.log(data); //fonction fléchée pour rester à l'intérieur de la classe
    this.competences = data;
  });
    
  
 }
}
