import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-prueba-texto',
  templateUrl: './prueba-texto.component.html',
  styleUrls: ['./prueba-texto.component.css']
})
export class PruebaTextoComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
