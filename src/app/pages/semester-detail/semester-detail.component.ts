import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Semester } from 'src/app/dataaccess/Semester';
import { SemesterService } from 'src/app/service/semester.service';

@Component({
  selector: 'app-semester-detail',
  templateUrl: './semester-detail.component.html',
  styleUrls: ['./semester-detail.component.scss']
})
export class SemesterDetailComponent implements OnInit {
  semester = new Semester();
  public objForm = new UntypedFormGroup({
    name: new UntypedFormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute,
              private snackBar: MatSnackBar, private formBuilder: UntypedFormBuilder,
              private semesterService: SemesterService) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);

      this.semesterService.getOne(id).subscribe(obj => {
        this.semester = obj;
        this.objForm = this.formBuilder.group(obj);
      });
    } else {
      this.objForm = this.formBuilder.group(this.semester);
    }
  }

  async back() {
    await this.router.navigate(['semester']);
  }

  async save(formData: any) {
    this.semester = Object.assign(formData);

    if (this.semester.id) {
      this.semesterService.update(this.semester).subscribe({
        next: () => {
          this.snackBar.open('Semester saved', 'Close', {duration: 5000});
          this.back();
        },
        error: () => {
          this.snackBar.open('Failed to save semester', 'Close', {duration: 5000, politeness: 'assertive'});
        }
      });
    } else {
      this.semesterService.save(this.semester.name).subscribe({
        next: () => {
          this.snackBar.open('New semester saved', 'Close', {duration: 5000});
          this.back();
        },
        error: () => {
          this.snackBar.open('Failed to save new semester', 'Close', {duration: 5000, politeness: 'assertive'});
        }
      });
    }
  }
}
