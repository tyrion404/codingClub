import { TestBed, inject } from '@angular/core/testing';

import { ApicallService } from './apicall.service';

describe('ApicallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApicallService]
    });
  });

  it('should be created', inject([ApicallService], (service: ApicallService) => {
    expect(service).toBeTruthy();
  }));
});
