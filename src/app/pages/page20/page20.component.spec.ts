import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page20Component } from './page20.component';

describe('Page20Component', () => {
  let component: Page20Component;
  let fixture: ComponentFixture<Page20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
