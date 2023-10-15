import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Gato } from '../models/gato';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  catFact: Gato = new Gato('', 0);
  

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCatFact().subscribe((data: Gato) => {
      this.catFact = data;
    });
  }

  cambiarMensaje() {
    this.apiService.getCatFact().subscribe((data: Gato) => {
      this.catFact = data;
    });
  }
}
