import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NOTICIAS } from '../../config/api.config';
import { Noticia } from '../../model/noticia';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  noticias : Noticia[] = NOTICIAS;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  navNoticiaDetalhe(n : Noticia){
    this.navCtrl.push('NoticiaDetalhePage',{noticia:n});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
