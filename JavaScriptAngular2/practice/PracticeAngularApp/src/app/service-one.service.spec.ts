import { TestBed, inject } from '@angular/core/testing';

import { ServiceOneService } from './service-one.service';

describe('ServiceOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceOneService]
    });
  });

  it('should be created', inject([ServiceOneService], (service: ServiceOneService) => {
    expect(service).toBeTruthy();
  }));
});
