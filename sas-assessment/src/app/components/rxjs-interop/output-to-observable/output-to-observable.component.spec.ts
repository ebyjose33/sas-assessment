import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputToObservableComponent } from './output-to-observable.component';

describe('OutputToObservableComponent', () => {
  let component: OutputToObservableComponent;
  let fixture: ComponentFixture<OutputToObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputToObservableComponent]
    });
    fixture = TestBed.createComponent(OutputToObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
