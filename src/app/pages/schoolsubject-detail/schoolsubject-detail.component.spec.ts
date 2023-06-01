import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsubjectDetailComponent } from './schoolsubject-detail.component';

describe('SchoolsubjectDetailComponent', () => {
  let component: SchoolsubjectDetailComponent;
  let fixture: ComponentFixture<SchoolsubjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsubjectDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolsubjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
