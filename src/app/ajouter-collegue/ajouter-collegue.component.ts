import { Component, OnInit } from '@angular/core';
import { Collegue, Formulaire } from '../models';
import { CollegueService } from '../services/collegue.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-collegue',
  templateUrl: './ajouter-collegue.component.html',
  styleUrls: ['./ajouter-collegue.component.scss']
})
export class AjouterCollegueComponent implements OnInit {
  errMsg: string;
  constructor(private _collegueSrv: CollegueService) { }

  ngOnInit() {
  }

  submit() {

    this._collegueSrv.envoiFormulaire(this.formulaire).then(() => this.formulaire = new Formulaire("", "", "")).catch((errServeur: HttpErrorResponse) => {

      if (errServeur.error.message) {
        this.errMsg = errServeur.error.message;
        console.log(this.errMsg)
      } else {
        this.errMsg = errServeur.error.text;
      }
    });

  }
  formulaire = new Formulaire("", "", "");
}
