import { TestBed, inject } from '@angular/core/testing';

import { QuiztoeditService } from './quiztoedit.service';

describe('QuiztoeditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuiztoeditService]
    });
  });

  it('should be created', inject([QuiztoeditService], (service: QuiztoeditService) => {
    expect(service).toBeTruthy();
  }));
});
