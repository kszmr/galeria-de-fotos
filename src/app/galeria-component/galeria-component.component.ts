import { Component, Input } from '@angular/core';

@Component({
  selector: 'galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css']
})
export class GaleriaComponentComponent  {

  @Input() titulo: string = 'Galeria de Fotos';
  fotos: string[] = [
    'https://cdn.wallpapersafari.com/21/24/Zo1yYS.jpg',
    'https://www.fundospaisagens.com/800x600/wallpaper-do-luar.jpg',
    'https://i.pinimg.com/originals/6c/34/74/6c3474070dc05b4a21a1dc6ec5e2ad6e.jpg',
    'http://www.fundosanimais.com/800x600/wallpaper-uma-borboleta.jpg',
    'http://www.fundosanimais.com/800x600/imagens-gatos.jpg'
  ];

  index: number = 0;

  next() {
    this.index++;
  }

  previous() {
    this.index--;
  }

  first() {
    this.index = 0;
  }

  last() {
    this.index = this.fotos.length-1;
  }

}