import { Component, OnInit } from '@angular/core';
import { Vote, Avis, Collegue } from '../models';

@Component({
  selector: 'app-historique-votes-component',
  templateUrl: './historique-votes-component.component.html',
  styleUrls: ['./historique-votes-component.component.scss']
})
export class HistoriqueVotesComponentComponent implements OnInit {
  votes: Array<Vote>;
  vote: Vote;
  constructor() {
    this.votes = [new Vote(Avis.AIMER, new Collegue("Jeanne", 500, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png")),
    new Vote(Avis.AIMER, new Collegue("Marcel", 500, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png")),
    new Vote(Avis.DETESTER, new Collegue("Rémi", 500, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png")),
    new Vote(Avis.DETESTER, new Collegue("Mathilde", 500, "https://cdn.freebiesupply.com/logos/large/2x/travis-ci-monochrome-logo-png-transparent.png"))
    ]

  }

  ngOnInit() {
  }

  supprimer() {
    // ne fonctionne pas
    if (this.votes.includes(this.vote)) {
      let newVotes = this.votes.filter(vote => vote === this.vote);
      this.votes = newVotes;
      console.log(this.vote + "oui")
    }
  }
}
