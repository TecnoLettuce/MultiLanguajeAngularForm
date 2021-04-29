import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaTextoComponent } from './prueba-texto.component';

describe('PruebaTextoComponent', () => {
  let component: PruebaTextoComponent;
  let fixture: ComponentFixture<PruebaTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaTextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
