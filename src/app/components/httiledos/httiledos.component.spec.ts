import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttiledosComponent } from './httiledos.component';

describe('HttiledosComponent', () => {
  let component: HttiledosComponent;
  let fixture: ComponentFixture<HttiledosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttiledosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttiledosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
