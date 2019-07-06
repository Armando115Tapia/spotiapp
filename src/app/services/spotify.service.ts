import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators'
// con los parametros de provideIn no hace falta importar en app.module
@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string){
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQD10Xqwv_7LTGU-LZQHzZSXX5747rEPuioKI4viO5ASaS5EB-qxSAq91wXNSP0w_9uRC0MLWih5Gj1XX6I"
    });

    return this.http.get(URL, {headers});

  }

  getNewReleses() {
    /*
    // Configuracion de los headers para acceder a la data
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQB-EK4j-pkWH6dyM30sDgzFg4HjJZF9H_n2EdhnNhKiZGR2ukie9HMhbqvJulRSBc5RUdSoXi6pBWpf3oA"
    });
    // se envia la solicitud con los headers
    return this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20",{ headers }).pipe(
      map( (data) => data['albums'].items));
      */
     return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items ));

  }

  getArtistas(termino: string){

        return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map((data) =>  data['artists'].items ));

        /*
    return this.http.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      { headers }
    ).pipe( map((data) =>  data['artists'].items ));*/

  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map( data => data['tracks']));
  }
}
