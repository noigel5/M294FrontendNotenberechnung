import { TestBed } from '@angular/core/testing';

import { SchoolsubjectService } from './schoolsubject.service';

describe('SchoolsubjectService', () => {
  let service: SchoolsubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolsubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
