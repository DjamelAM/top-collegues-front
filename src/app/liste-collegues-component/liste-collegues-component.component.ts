import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { Services } from '@angular/core/src/view';
import { CollegueService } from '../services/collegue.service';
import { FilterPipe } from '../pipes/filter.pipe';
@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {
  collegues: Array<Collegue>;
  err: string;
  searchText:string;
  constructor(private _collegueSrv: CollegueService) { }


  ngOnInit() {
    this._collegueSrv.listerCollegues().subscribe(

      tabCol => (this.collegues = tabCol),
      errServeur => {
        if (errServeur.code && errServeur.message) {
          this.err = errServeur.message;
        } else {
          this.err = 'Erreur technique côté serveur';
        }
      });
  }
}
