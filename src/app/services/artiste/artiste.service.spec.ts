import { TestBed, inject } from '@angular/core/testing';

import { ArtisteService } from './artiste.service';

describe('ArtisteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtisteService]
    });
  });

  it('should be created', inject([ArtisteService], (service: ArtisteService) => {
    expect(service).toBeTruthy();
  }));
});
