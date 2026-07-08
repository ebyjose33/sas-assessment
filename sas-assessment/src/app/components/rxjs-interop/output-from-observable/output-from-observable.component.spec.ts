import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFromObservableComponent } from './output-from-observable.component';

describe('OutputFromObservableComponent', () => {
  let component: OutputFromObservableComponent;
  let fixture: ComponentFixture<OutputFromObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputFromObservableComponent]
    });
    fixture = TestBed.createComponent(OutputFromObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
