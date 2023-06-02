import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { SchoolSubject } from 'src/app/dataaccess/SchoolSubject';
import { SchoolsubjectService } from 'src/app/service/schoolsubject.service';

@Component({
  selector: 'app-schoolsubject',
  templateUrl: './schoolsubject.component.html',
  styleUrls: ['./schoolsubject.component.scss']
})
export class SchoolsubjectComponent implements OnInit {
  SchoolSubjectDataSource = new MatTableDataSource<SchoolSubject>();
  displayedColumns: string[] = ['subject', 'actions'];

  @Input()
  semesterId!: number;

  constructor(private schoolSubjectService: SchoolsubjectService, private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  async ngOnInit() {
    await this.reloadData();
  }

  reloadData() {
    this.schoolSubjectService.getList(this.semesterId).subscribe(obj => {
      this.SchoolSubjectDataSource.data = obj;
    });
  }

  async add() {
    await this.router.navigate(['schoolSubjectDetail']);
  }

  async edit(e: SchoolSubject) {
    await this.router.navigate(['schoolSubjectDetail', e.id]);
  }

  delete(e: SchoolSubject) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '450px',
      data: {
        title: 'Delete SchollSubject?',
        message: 'Do you really want to delete the selected schoolSubject?'
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult === true) {
        this.schoolSubjectService.delete(e.id).subscribe({
          next: response => {
            if (response.status === 200) {
              this.snackBar.open('SchoolSubject deleted!"', 'Close', {duration: 5000});
              this.reloadData();
            } else {
              this.snackBar.open('Item could not be deleted, server error!', 'Close', {duration: 5000});
            }
          },
          error: () => this.snackBar.open('Item could not be deleted, server error!', 'Close', {duration: 5000})
        });
      }
    });
  }
}
