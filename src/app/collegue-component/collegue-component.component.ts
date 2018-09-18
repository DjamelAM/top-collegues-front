import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent implements OnInit {
  @Input() collegue: Collegue;
  resultat: string;
  avisFinal: Avis;
  constructor(private _collegueSrv: CollegueService) {
  }
  ngOnInit() {
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
    });
  }
}
