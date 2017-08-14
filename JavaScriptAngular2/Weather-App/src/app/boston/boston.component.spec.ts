import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BostonComponent } from './boston.component';

describe('BostonComponent', () => {
  let component: BostonComponent;
  let fixture: ComponentFixture<BostonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BostonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BostonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
