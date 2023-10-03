import { TestBed } from '@angular/core/testing';

import { QuesAnsService } from './ques-ans.service';

describe('QuesAnsService', () => {
  let service: QuesAnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuesAnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
