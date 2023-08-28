import { TestBed } from '@angular/core/testing';

import { ByStatusTaskService } from './by-status-task.service';

describe('ByStatusTaskService', () => {
  let service: ByStatusTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByStatusTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
