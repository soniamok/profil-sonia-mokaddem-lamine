import { Component, OnInit } from '@angular/core';
import { CompetencesService } from '../systeme/services/competences.service';
@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
 

  constructor(public competencesServ:CompetencesService) { }

  ngOnInit(): void {
    console.log(this.competencesServ);
    
  }

}
