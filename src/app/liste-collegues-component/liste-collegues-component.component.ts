import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { Services } from '@angular/core/src/view';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {
  collegues: Array<Collegue>;
  constructor(private _collegueSrv: CollegueService) { }

  /* this.collegues = [new Collegue("Francis", 9000, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png"),
  new Collegue("Jeanne", 500, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png"),
  new Collegue("Marcel", 600, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png"),
  new Collegue("Suzanne", 600, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png"),
  new Collegue("Suzanne", 600, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png"),
  new Collegue("Frank", -1000, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png")
  ] */



  ngOnInit() {
    this._collegueSrv.listerCollegues().then(tabCol => (this.collegues = tabCol))
  }

}
