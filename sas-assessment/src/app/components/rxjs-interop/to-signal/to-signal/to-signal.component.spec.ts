import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSignalComponent } from './to-signal.component';

describe('ToSignalComponent', () => {
  let component: ToSignalComponent;
  let fixture: ComponentFixture<ToSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToSignalComponent]
    });
    fixture = TestBed.createComponent(ToSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
