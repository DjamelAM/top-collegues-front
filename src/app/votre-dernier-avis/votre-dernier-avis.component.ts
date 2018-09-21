import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Vote, Avis } from '../models';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.scss']
})
export class VotreDernierAvisComponent implements OnInit {
  resultat: string;
  resultats: Array<string>[];
  constructor(private _collegueSrv: CollegueService) { }

  ngOnInit() {


    this._collegueSrv.bus.subscribe(vote => {
      if (vote.avis === Avis.AIMER) {
        this.resultat = "J'ai aimé"
      }
      if (vote.avis === Avis.DETESTER) {
        this.resultat = "Je n'ai pas aimé"
      }

      this.resultat += (" " + vote.collegue.pseudo)
    }
    )

  }
}
