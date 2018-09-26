import { TestBed, inject } from '@angular/core/testing';

import { PieceMoveService } from './piecemove.service';

describe('PieceMoveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PieceMoveService]
    });
  });

  it('should be created', inject([PieceMoveService], (service: PieceMoveService) => {
    expect(service).toBeTruthy();
  }));
});
