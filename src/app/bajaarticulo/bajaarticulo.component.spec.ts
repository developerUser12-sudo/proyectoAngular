import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaarticuloComponent } from './bajaarticulo.component';

describe('BajaarticuloComponent', () => {
  let component: BajaarticuloComponent;
  let fixture: ComponentFixture<BajaarticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BajaarticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
