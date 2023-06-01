import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterDetailComponent } from './semester-detail.component';

describe('SemesterDetailComponent', () => {
  let component: SemesterDetailComponent;
  let fixture: ComponentFixture<SemesterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemesterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemesterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
