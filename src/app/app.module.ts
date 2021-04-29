import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports para la libreria ngx
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PruebaTextoComponent } from './prueba-texto/prueba-texto.component';

// Función necesaria para el loader
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    PruebaTextoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

