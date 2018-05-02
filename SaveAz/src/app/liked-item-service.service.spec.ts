import { TestBed, inject } from '@angular/core/testing';

import { LikedItemServiceService } from './liked-item-service.service';

describe('LikedItemServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikedItemServiceService]
    });
  });

  it('should be created', inject([LikedItemServiceService], (service: LikedItemServiceService) => {
    expect(service).toBeTruthy();
  }));
});
