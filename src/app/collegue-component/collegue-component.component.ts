import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent implements OnInit {
  @Input() collegue: Collegue;
  resultat: string;
  errMsg: string;
  constructor(private _collegueSrv: CollegueService) { }
  ngOnInit() {
  }

  traiter(avis: Avis) {
    this._collegueSrv.donnerUnAvis(this.collegue, avis).subscribe(
      tabCol => {
        if (avis === Avis.AIMER) {
          this.collegue.points = tabCol.points;
        }

        if (avis === Avis.DETESTER) {
          this.collegue.points = tabCol.points;
        }
        this.resultat = "Vous avez cliquez sur " + avis;
      },

      (errServeur: HttpErrorResponse) => {
        if (errServeur.error) {
          this.errMsg = errServeur.error.text;
        } else {
          this.errMsg = 'Erreur technique côté serveur';
        }
      });
  }
}
