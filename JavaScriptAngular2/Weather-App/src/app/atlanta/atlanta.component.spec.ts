import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlantaComponent } from './atlanta.component';

describe('AtlantaComponent', () => {
  let component: AtlantaComponent;
  let fixture: ComponentFixture<AtlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
