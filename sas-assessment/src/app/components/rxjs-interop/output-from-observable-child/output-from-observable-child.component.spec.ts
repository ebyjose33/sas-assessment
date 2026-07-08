import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFromObservableChildComponent } from './output-from-observable-child.component';

describe('OutputFromObservableChildComponent', () => {
  let component: OutputFromObservableChildComponent;
  let fixture: ComponentFixture<OutputFromObservableChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputFromObservableChildComponent]
    });
    fixture = TestBed.createComponent(OutputFromObservableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
