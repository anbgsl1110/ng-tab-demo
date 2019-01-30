import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page15Component } from './page15.component';

describe('Page15Component', () => {
  let component: Page15Component;
  let fixture: ComponentFixture<Page15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
