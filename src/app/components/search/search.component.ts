import { SpotifyService } from 'src/app/services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any[] = [];
  loading: boolean;

  constructor(private _serviceSpotify: SpotifyService) {

  }

  buscar(termino: string){
  this.loading = true;
  this._serviceSpotify.getArtistas(termino).subscribe(
    (data: any) => {
      console.log(data);
       this.artistas = data;
       this.loading=false;
    }
  );

  }


}
