import {TestBed} from '@angular/core/testing';

import {DepartmentService} from './department.service';
import {createSpyFromClass, Spy} from 'jasmine-auto-spies';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Department} from '../dataaccess/department';

describe('DepartmentService', () => {
  let service: DepartmentService;
  let httpSpy: Spy<HttpClient>;

  const fakeDepartments: Department[] = [
    {
      id: 1,
      name: 'Department 1'
    },
    {
      id: 2,
      name: 'Department 2'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)}
      ]
    });
    service = TestBed.inject(DepartmentService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a list of departments', (done: DoneFn) => {
    httpSpy.get.and.nextWith(fakeDepartments);

    service.getList().subscribe({
        next:
          departments => {
            expect(departments).toHaveSize(fakeDepartments.length);
            done();
          },
        error: done.fail
      }
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });
  it('should create a new department', (done: DoneFn) => {

    const newDepartment: Department = {
      id: 3,
      name: 'Department 3'
    };

    httpSpy.post.and.nextWith(newDepartment);

    service.save(newDepartment).subscribe({
        next: department => {
          expect(department).toEqual(newDepartment);
          done();
        },
        error: done.fail
      }
    );
    expect(httpSpy.post.calls.count()).toBe(1);
  });

  it('should update an department', (done: DoneFn) => {

    const department = fakeDepartments[0];
    department.name = 'Updated Department';

    httpSpy.put.and.nextWith(department);

    service.update(department).subscribe({
      next: department => {
        expect(department.name).toEqual('Updated Department');
        done();
      },
      error: done.fail
    });
    expect(httpSpy.put.calls.count()).toBe(1);
  });

  it('should delete an existing department', (done: DoneFn) => {

    httpSpy.delete.and.nextWith(new HttpResponse({
      status: 200
    }));

    service.delete(1).subscribe({
      next: response => {
        expect(response.status).toBe(200);
        done();
      },
      error: done.fail
    });
    expect(httpSpy.delete.calls.count()).toBe(1);
  });
});
