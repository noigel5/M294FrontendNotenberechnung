import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { Semester } from 'src/app/dataaccess/Semester';
import { SemesterService } from 'src/app/service/semester.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})

export class SemesterComponent {
  SemesterDataSource = new MatTableDataSource<Semester>();
  displayedColumns: string[] = ['name', 'actions'];

  constructor(private semesterService: SemesterService, private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  async ngOnInit() {
    await this.reloadData();
  }

  reloadData() {
    this.semesterService.getList().subscribe(obj => {
      this.SemesterDataSource.data = obj;
    });
  }

  async add() {
    await this.router.navigate(['semesterDetail']);
  }

  async edit(e: Semester) {
    await this.router.navigate(['semesterDetail', e.id]);
  }

  delete(e: Semester) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '450px',
      data: {
        title: 'Delete Semester?',
        message: 'Do you really want to delete the selected semester?'
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult === true) {
        this.semesterService.delete(e.id).subscribe({
          next: response => {
            if (response.status === 200) {
              this.snackBar.open('Semester deleted!"', 'Close', {duration: 5000});
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
