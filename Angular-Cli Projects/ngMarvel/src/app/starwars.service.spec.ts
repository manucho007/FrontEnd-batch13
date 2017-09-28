import { TestBed, inject } from '@angular/core/testing';

import { StarwarsService } from './starwars.service';

describe('StarwarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarwarsService]
    });
  });

  it('should ...', inject([StarwarsService], (service: StarwarsService) => {
    expect(service).toBeTruthy();
  }));
});
