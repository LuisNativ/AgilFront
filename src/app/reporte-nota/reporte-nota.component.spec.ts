import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteNotaComponent } from './reporte-nota.component';

describe('ReporteNotaComponent', () => {
  let component: ReporteNotaComponent;
  let fixture: ComponentFixture<ReporteNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
