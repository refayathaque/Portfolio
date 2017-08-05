import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTwoChildComponent } from './component-two-child.component';

describe('ComponentTwoChildComponent', () => {
  let component: ComponentTwoChildComponent;
  let fixture: ComponentFixture<ComponentTwoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTwoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTwoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
