import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14Component } from './page14.component';

describe('Page14Component', () => {
  let component: Page14Component;
  let fixture: ComponentFixture<Page14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
