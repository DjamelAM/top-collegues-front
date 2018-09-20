import { Component, OnInit, Input, Output, NgModule } from '@angular/core';
import { Vote, Avis, Collegue } from '../models';

@Component({
  selector: 'app-historique-votes-component',
  templateUrl: './historique-votes-component.component.html',
  styleUrls: ['./historique-votes-component.component.scss']
})
export class HistoriqueVotesComponentComponent implements OnInit {
  votes: Array<Vote> = [];
  nbrVotes: number;
  constructor() {


    this.votes = this.votes.concat([new Vote(Avis.AIMER, new Collegue("Jeanne", 500, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png", "JEANNNNNNNEE", "", "SurtoutpasJeanne", "")),
    new Vote(Avis.AIMER, new Collegue("Marcel", 500, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png", "Marcel0", "", "", "")),
    new Vote(Avis.DETESTER, new Collegue("Rémi", 500, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png", "Rémi", "", "", "")),
    new Vote(Avis.DETESTER, new Collegue("Mathilde", 500, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png", "Mattt", "", "", ""))
    ]);
    this.nbrVotes = this.votes.length;
  }

  ngOnInit() {
  }

  supprimer(voteASupprimer) {
    this.votes = this.votes.filter(vote => vote !== voteASupprimer)
  }
}
