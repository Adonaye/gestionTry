import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Anuncio } from '../../model/anuncio';
import { CrearAnuncioPage } from '../crear-anuncio/crear-anuncio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  anuncios: any[];

  constructor(public navCtrl: NavController) {
    this.anuncios = new Array<Anuncio>();
    for (let i = 0; i < 5; i++) {
      let anuncio = new Anuncio();
      anuncio.titulo = `Mensaje ${i+1}`;
      anuncio.imagenUrl = "http://www.excalibur.com.co/wp-content/uploads/2016/10/CALCULADORA-CASIO-GX14-14-DIGITOS-1.jpg";
      anuncio.contenido = `
Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos felis, ullamcorper tortor aliquam ultricies ornare quam mi orci dapibus pharetra, gravida hendrerit justo condimentum mauris scelerisque sem ultrices. Augue fringilla aenean lobortis accumsan vel dui imperdiet aliquet litora et cras, tortor netus etiam class vitae natoque at hendrerit vivamus ultricies est sociis, bibendum potenti praesent arcu integer purus lacus dapibus phasellus magna. Feugiat ultricies inceptos tellus felis lacinia posuere dictum velit fermentum sodales, nisl porta lobortis sapien nulla ridiculus id convallis.
      `;
      this.anuncios.push(anuncio);
    }
  }

  agregarAnuncio() {
    /* let anuncio = new Anuncio();
    anuncio.titulo = `Mensaje otro`;
    anuncio.imagenUrl = "https://staticaltmetric.s3.amazonaws.com/uploads/2015/10/dark-logo-for-site.png";
    anuncio.contenido = `
Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos felis, ullamcorper tortor aliquam ultricies ornare quam mi orci dapibus pharetra, gravida hendrerit justo condimentum mauris scelerisque sem ultrices. Augue fringilla aenean lobortis accumsan vel dui imperdiet aliquet litora et cras, tortor netus etiam class vitae natoque at hendrerit vivamus ultricies est sociis, bibendum potenti praesent arcu integer purus lacus dapibus phasellus magna. Feugiat ultricies inceptos tellus felis lacinia posuere dictum velit fermentum sodales, nisl porta lobortis sapien nulla ridiculus id convallis.
      `;
    this.anuncios.push(anuncio); */
    console.log('push');
    this.navCtrl.push(CrearAnuncioPage);
  }

  foo() {
    
  }
}