import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Anuncio } from '../../model/anuncio';

/**
 * Generated class for the CrearAnuncioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-crear-anuncio',
  templateUrl: 'crear-anuncio.html',
})
export class CrearAnuncioPage {
  anuncioForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fb: FormBuilder
  ) {
    this.anuncioForm = fb.group({
      titulo: '',
      imagenUrl: '',
      contenido: '',
      tags: [],
      color: null
    })
  }

  crearAnuncio() {
    let anuncioInfo = this.anuncioForm.value;
    let anuncio = new Anuncio(anuncioInfo['color']);
    anuncio.titulo = anuncioInfo['titulo'];
    anuncio.contenido = anuncioInfo['contenido'];
    anuncio.tags = anuncioInfo['tags'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearAnuncioPage');
  }

}
