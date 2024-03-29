import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  topTracks: any[];


  constructor(
      private _activatedRoute: ActivatedRoute,
      private _serviceSpoty: SpotifyService
    ) {

    this.loading = true;
    this._activatedRoute.params.subscribe(params => {
      //console.log( this._serviceSpoty.getArtista(params['id']) );
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });


   }

   getArtista(id: string){
    this.loading = true;
     this._serviceSpoty.getArtista(id).subscribe( artista => {
       console.log(artista)
       this.artista = artista;
       this.loading =false;
     })
   }
   getTopTracks(id: string){

     this._serviceSpoty.getTopTracks(id).subscribe( topTracks => {
       console.log(topTracks);
       this.topTracks = topTracks;
     });
   }



}
