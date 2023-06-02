import { TestBed } from '@angular/core/testing';

import { SemesterService } from './semester.service';
import {createSpyFromClass, Spy} from 'jasmine-auto-spies';
import { HttpClient } from '@angular/common/http';
import { Semester } from '../dataaccess/Semester';

describe('SemesterService', () => {
  let service: SemesterService;
  let httpSpy: Spy<HttpClient>;

  const fakeDepartments: Semester[] = [
    {
      id: 1,
      name: 'semester 1'
    },
    {
      id: 2,
      name: 'semester 2'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)}
      ]
    });
    service = TestBed.inject(SemesterService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of semester', (done: DoneFn) => {
    httpSpy.get.and.nextWith(fakeDepartments);

    service.getList().subscribe({
        next:
          semester => {
            expect(semester).toHaveSize(fakeDepartments.length);
            done();
          },
        error: done.fail
      }
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });
});
