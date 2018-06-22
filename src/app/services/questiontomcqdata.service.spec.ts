import { TestBed, inject } from '@angular/core/testing';

import { QuestiontomcqdataService } from './questiontomcqdata.service';

describe('QuestiontomcqdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestiontomcqdataService]
    });
  });

  it('should be created', inject([QuestiontomcqdataService], (service: QuestiontomcqdataService) => {
    expect(service).toBeTruthy();
  }));
});
