import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  msmError: string;

  constructor(private _spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;

    // Los subscribe manejan siempre dos funciones, la de succes y la de error
    this._spotifyService.getNewReleses().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      // console.log(this.nuevasCanciones);
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.msmError = errorServicio.error.error.message;
    } );
  }

  ngOnInit() {
  }

}
