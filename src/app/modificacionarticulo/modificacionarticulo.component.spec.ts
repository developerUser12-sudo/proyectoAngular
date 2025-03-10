import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionarticuloComponent } from './modificacionarticulo.component';

describe('ModificacionarticuloComponent', () => {
  let component: ModificacionarticuloComponent;
  let fixture: ComponentFixture<ModificacionarticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificacionarticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacionarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
