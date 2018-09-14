import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Avis, Collegue, Vote } from '../models';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.scss']
})
export class AvisComponentComponent implements OnInit {

  constructor() { }
  @Output() avis: EventEmitter<Avis> = new EventEmitter<Avis>();
  ngOnInit() {
  }
  aimerClic() {
    this.avis.emit(Avis.AIMER);
  }
  detesterClic() {
    this.avis.emit(Avis.DETESTER);
  }
}
