import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttilecuatroComponent } from './httilecuatro.component';

describe('HttilecuatroComponent', () => {
  let component: HttilecuatroComponent;
  let fixture: ComponentFixture<HttilecuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttilecuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttilecuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
