import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page10Component } from './page10.component';

describe('Page10Component', () => {
  let component: Page10Component;
  let fixture: ComponentFixture<Page10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
