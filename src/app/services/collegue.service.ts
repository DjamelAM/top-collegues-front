import { Injectable } from '@angular/core';
import { Collegue, Avis, Formulaire, Vote } from '../models';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

// en développement, URL_BACKEND = 'http://localhost:port'
// en mode production, URL_BACKEND = 'http://adresseheroku'
const URL_BACKEND = environment.backendUrl;
@Injectable({
  providedIn: "root"
})
export class CollegueService {

  private _bus = new Subject<Vote>();

  get bus(): Observable<Vote> {
    return this._bus.asObservable();
  }
  constructor(private _http: HttpClient) {
  }

  listerCollegues(): Observable<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this._http.get(URL_BACKEND).pipe(
      map((data: any[]) =>
        data.map(collegue =>
          new Collegue(collegue.name, collegue.points, collegue.url, collegue.pseudo, collegue.adresse, collegue.email, collegue.prenom)),
      ));
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Observable<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur
    let body;
    let avisFinal: Observable<Collegue>;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    if (avis === Avis.AIMER) {
      body = { action: 'AIMER' };
    }
    if (avis === Avis.DETESTER) {
      body = { action: 'DETESTER' };
    }
    avisFinal = this._http.patch(URL_BACKEND + `/${unCollegue.pseudo}`, body, httpOptions).pipe(
      map(
        (col: any) => new Collegue(col.name, col.points, col.url, col.pseudo, col.adresse, col.email, col.prenom)),
      tap(
        col => {
          this._bus.next(
            new Vote(avis, col)
          )
        }
      ));

    return avisFinal;
  }

  findByName(pseudo: String): Observable<Collegue> {
    return this._http.get(URL_BACKEND + `/${pseudo}`).pipe(
      map(
        (col: any) => new Collegue(col.name, col.points, col.url, col.pseudo, col.adresse, col.email, col.prenom))

    )

  }

  envoiFormulaire(formulaire: Formulaire): Observable<any> {
    return this._http.post(URL_BACKEND + `/new`, formulaire);

  }

}