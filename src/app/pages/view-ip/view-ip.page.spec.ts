import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIPPage } from './view-ip.page';

describe('ViewIPPage', () => {
  let component: ViewIPPage;
  let fixture: ComponentFixture<ViewIPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
