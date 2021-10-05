import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarprofesorComponent } from './editarprofesor.component';

describe('EditarprofesorComponent', () => {
  let component: EditarprofesorComponent;
  let fixture: ComponentFixture<EditarprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarprofesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
