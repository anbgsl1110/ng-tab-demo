import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13Component } from './page13.component';

describe('Page13Component', () => {
  let component: Page13Component;
  let fixture: ComponentFixture<Page13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
