import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagea1Component } from './pagea1.component';

describe('Pagea1Component', () => {
  let component: Pagea1Component;
  let fixture: ComponentFixture<Pagea1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagea1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
