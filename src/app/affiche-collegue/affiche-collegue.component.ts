import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Collegue, Avis } from '../models';
import { HttpErrorResponse } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-affiche-collegue',
  templateUrl: './affiche-collegue.component.html',
  styleUrls: ['./affiche-collegue.component.scss']
})
export class AfficheCollegueComponent implements OnInit {
  pseudo: string;
  collegue: Collegue;
  errMsg: string;
  resultat: string;
  constructor(private _collegueSrv: CollegueService, private route: ActivatedRoute) {
    this.pseudo = route.snapshot.paramMap.get("pseudo")
  }

  ngOnInit() {
    this.collegue = new Collegue("", "", "", "", "", "", "")
    this._collegueSrv.findByName(this.pseudo).then(col => this.collegue = col).catch((errServeur: HttpErrorResponse) => {
      if (errServeur.error.message) {
        this.errMsg = errServeur.error.message;
      } else {
        this.errMsg = 'Erreur technique côté serveur';
      }
    });
  }

  traiter(avis: Avis) {
    this._collegueSrv.donnerUnAvis(this.collegue, avis).then(tabCol => {
      if (avis === Avis.AIMER) {
        this.collegue.points = tabCol.points;
      }

      if (avis === Avis.DETESTER) {
        this.collegue.points = tabCol.points;
      }
      this.resultat = "Vous avez cliquez sur " + avis;
    }).catch((errServeur: HttpErrorResponse) => {
      if (errServeur.error.message) {
        this.errMsg = errServeur.error.message;
      } else {
        this.errMsg = 'Erreur technique côté serveur';
      }
    });
  }
}
