import { SpotifyService } from 'src/app/services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any[] = [];
  constructor(private _serviceSpotify: SpotifyService) { }

  buscar(termino: string){
  this._serviceSpotify.getArtista(termino).subscribe(
    (data: any) => {
      console.log(data);
       this.artistas = data;
    }
  );

  }


}
