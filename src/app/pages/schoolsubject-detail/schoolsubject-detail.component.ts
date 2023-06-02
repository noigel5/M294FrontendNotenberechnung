import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolSubject } from 'src/app/dataaccess/SchoolSubject';
import { SchoolsubjectService } from 'src/app/service/schoolsubject.service';

@Component({
  selector: 'app-schoolsubject-detail',
  templateUrl: './schoolsubject-detail.component.html',
  styleUrls: ['./schoolsubject-detail.component.scss']
})
export class SchoolsubjectDetailComponent implements OnInit{
  schoolSubject = new SchoolSubject();
  public objForm = new UntypedFormGroup({
    subject: new UntypedFormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute,
              private snackBar: MatSnackBar, private formBuilder: UntypedFormBuilder,
              private schoolSubjectService: SchoolsubjectService) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);

      this.schoolSubjectService.getOne(id).subscribe(obj => {
        this.schoolSubject = obj;
        this.objForm = this.formBuilder.group(obj);
      });
    } else {
      this.objForm = this.formBuilder.group(this.schoolSubject);
    }
  }

  async back() {
    await this.router.navigate(['semester']);
  }

  async save(formData: any) {
    this.schoolSubject = Object.assign(formData);

    if (this.schoolSubject.id) {
      this.schoolSubjectService.update(this.schoolSubject).subscribe({
        next: () => {
          this.snackBar.open('School subject saved', 'Close', {duration: 5000});
          this.back();
        },
        error: () => {
          this.snackBar.open('Failed to save school subject', 'Close', {duration: 5000, politeness: 'assertive'});
        }
      });
    } else {
      this.schoolSubjectService.save(this.schoolSubject.subject).subscribe({
        next: () => {
          this.snackBar.open('New school subject saved', 'Close', {duration: 5000});
          this.back();
        },
        error: () => {
          this.snackBar.open('Failed to save new school subject', 'Close', {duration: 5000, politeness: 'assertive'});
        }
      });
    }
  }
}
