import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagea2Component } from './pagea2.component';

describe('Pagea2Component', () => {
  let component: Pagea2Component;
  let fixture: ComponentFixture<Pagea2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagea2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
