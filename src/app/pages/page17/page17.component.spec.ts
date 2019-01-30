import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page17Component } from './page17.component';

describe('Page17Component', () => {
  let component: Page17Component;
  let fixture: ComponentFixture<Page17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
