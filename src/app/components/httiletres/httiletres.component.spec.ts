import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttiletresComponent } from './httiletres.component';

describe('HttiletresComponent', () => {
  let component: HttiletresComponent;
  let fixture: ComponentFixture<HttiletresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttiletresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttiletresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
