import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Collegue } from '../models';
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
  constructor(private _collegueSrv: CollegueService, private route: ActivatedRoute) {
    this.pseudo = route.snapshot.paramMap.get("pseudo")
  }

  ngOnInit() {
    this.collegue = new Collegue("", "", "")
    this._collegueSrv.findByName(this.pseudo).then(col => this.collegue = col).catch((errServeur: HttpErrorResponse) => {
      if (errServeur.error.message) {
        this.errMsg = errServeur.error.message;
      } else {
        this.errMsg = 'Erreur technique côté serveur';
      }
    });
  }
}
