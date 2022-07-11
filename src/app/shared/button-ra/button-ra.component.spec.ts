import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRaComponent } from './button-ra.component';

describe('ButtonRaComponent', () => {
  let component: ButtonRaComponent;
  let fixture: ComponentFixture<ButtonRaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
