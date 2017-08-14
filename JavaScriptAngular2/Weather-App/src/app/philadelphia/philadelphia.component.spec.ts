import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhiladelphiaComponent } from './philadelphia.component';

describe('PhiladelphiaComponent', () => {
  let component: PhiladelphiaComponent;
  let fixture: ComponentFixture<PhiladelphiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhiladelphiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhiladelphiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
