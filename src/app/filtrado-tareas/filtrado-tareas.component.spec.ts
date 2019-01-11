import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoTareasComponent } from './filtrado-tareas.component';

describe('FiltradoTareasComponent', () => {
  let component: FiltradoTareasComponent;
  let fixture: ComponentFixture<FiltradoTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltradoTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
