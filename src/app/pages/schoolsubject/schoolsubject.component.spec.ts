import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsubjectComponent } from './schoolsubject.component';

describe('SchoolsubjectComponent', () => {
  let component: SchoolsubjectComponent;
  let fixture: ComponentFixture<SchoolsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
