import { Component, OnInit, Input, Output } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.scss']
})
export class AvisComponentComponent implements OnInit {

  constructor() { }
  @Input() resultat: string;
  avis: Avis;
  ngOnInit() {
  }
  aimerClic() {
    this.resultat = "Vous avez cliquez sur " + Avis.AIMER;

  }
  detesterClic() {
    this.resultat = "Vous avez cliquez sur " + Avis.DETESTER;
  }
}
