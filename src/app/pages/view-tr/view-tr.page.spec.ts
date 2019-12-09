import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTRPage } from './view-tr.page';

describe('ViewTRPage', () => {
  let component: ViewTRPage;
  let fixture: ComponentFixture<ViewTRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
