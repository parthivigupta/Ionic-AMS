import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgrPage } from './view-agr.page';

describe('ViewAgrPage', () => {
  let component: ViewAgrPage;
  let fixture: ComponentFixture<ViewAgrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAgrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAgrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
