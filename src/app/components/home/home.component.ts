import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];

  constructor(private _spotifyService: SpotifyService) {
    this._spotifyService.getNewReleses().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      // console.log(this.nuevasCanciones);
    });
  }

  ngOnInit() {
  }

}
