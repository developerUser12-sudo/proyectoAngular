import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaarticuloComponent } from './altaarticulo.component';

describe('AltaarticuloComponent', () => {
  let component: AltaarticuloComponent;
  let fixture: ComponentFixture<AltaarticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaarticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
