import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports para la libreria ngx
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Esta función no funciona, creo que se soluciona con la de abajp TODO PRUEBAS
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent
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

