import { TestBed } from '@angular/core/testing';

import { CRUDTaskListService } from './c-r-u-d-task-list.service';

describe('CRUDTaskListServiceService', () => {
  let service: CRUDTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
