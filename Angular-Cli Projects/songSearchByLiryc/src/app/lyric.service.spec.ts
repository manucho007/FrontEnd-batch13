import { TestBed, inject } from '@angular/core/testing';

import { LyricService } from './lyric.service';

describe('LyricService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LyricService]
    });
  });

  it('should ...', inject([LyricService], (service: LyricService) => {
    expect(service).toBeTruthy();
  }));
});
