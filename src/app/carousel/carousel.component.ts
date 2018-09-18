import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() collegue: Collegue;
  collegues: Array<Collegue>;
  constructor(private _collegueSrv: CollegueService) { }

  ngOnInit() {
    this._collegueSrv.listerCollegues().then(tabCol => (this.collegues = tabCol))
  }

}
