import { TestBed, inject } from '@angular/core/testing';

import { BucketListService } from './bucket-list.service';

describe('BucketListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketListService]
    });
  });

  it('should be created', inject([BucketListService], (service: BucketListService) => {
    expect(service).toBeTruthy();
  }));
});
