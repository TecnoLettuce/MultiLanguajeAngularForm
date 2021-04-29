import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
// Imports para las traducciones
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle = environment.tittle;

  constructor(public translate: TranslateService) {
    // Añadimos los idiomas al objeto de traducción
    translate.addLangs(['en', 'es'])
    // Seteamos el lenguaje por defecto en inglés
    translate.setDefaultLang('en')
  }

  // Creamos la función que permite al usuario seleccionar el idioma
  cambiarIdioma(lang: string) {
    this.translate.use(lang)
  }






}
