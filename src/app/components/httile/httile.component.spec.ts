import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTtileComponent } from './httile.component';

describe('HTtileComponent', () => {
  let component: HTtileComponent;
  let fixture: ComponentFixture<HTtileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTtileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
