import { TestBed, inject } from '@angular/core/testing';

import { InscrireService } from './inscrire.service';

describe('InscrireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InscrireService]
    });
  });

  it('should be created', inject([InscrireService], (service: InscrireService) => {
    expect(service).toBeTruthy();
  }));
});
