import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent implements OnInit {
  @Input() collegue: Collegue;
  resultat: string;
  constructor() {
  }
  ngOnInit() {
  }

  traiter(avis: Avis) {
    if (avis === Avis.AIMER && !(this.collegue.points >= 1000)) {
      this.collegue.points += 1;
    }

    if (avis === Avis.DETESTER && !(this.collegue.points <= -1000)) {
      this.collegue.points -= 1;
    }
    this.resultat = "Vous avez cliquez sur " + avis;

  }
}
