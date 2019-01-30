import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page19Component } from './page19.component';

describe('Page19Component', () => {
  let component: Page19Component;
  let fixture: ComponentFixture<Page19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
