import { TestBed, inject } from '@angular/core/testing';

import { MusiqueService } from './musique.service';

describe('MusiqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusiqueService]
    });
  });

  it('should be created', inject([MusiqueService], (service: MusiqueService) => {
    expect(service).toBeTruthy();
  }));
});
