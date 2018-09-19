import { Injectable } from '@angular/core';
import { Collegue, Avis } from '../models';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// en développement, URL_BACKEND = 'http://localhost:port'
// en mode production, URL_BACKEND = 'http://adresseheroku'
const URL_BACKEND = environment.backendUrl;
@Injectable({
  providedIn: "root"
})
export class CollegueService {
  avisFinal;
  constructor(private _http: HttpClient) {
  }

  listerCollegues(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this._http.get(URL_BACKEND).toPromise().then((data: any[]) => data.map(col => new Collegue(col.name, col.points, col.url)));
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    if (avis === Avis.AIMER) {
      const body = { action: 'AIMER' };
      this.avisFinal = this._http.patch(URL_BACKEND + `/${unCollegue.pseudo}`, body, httpOptions).toPromise();

    }
    if (avis === Avis.DETESTER) {
      const body = { action: 'DETESTER' };
      this.avisFinal = this._http.patch(URL_BACKEND + `/${unCollegue.pseudo}`, body, httpOptions).toPromise();
    }

    return this.avisFinal;
  }

  findByName(pseudo: String) {
    return this._http.get(URL_BACKEND + `/${pseudo}`).toPromise().then((col: any) => new Collegue(col.name, col.points, col.url));

  }

}