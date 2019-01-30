import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page6Component } from './page6.component';

describe('Page6Component', () => {
  let component: Page6Component;
  let fixture: ComponentFixture<Page6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
