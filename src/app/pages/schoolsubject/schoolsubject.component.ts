import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SchoolSubject } from 'src/app/dataaccess/SchoolSubject';
import { SchoolsubjectService } from 'src/app/service/schoolsubject.service';

@Component({
  selector: 'app-schoolsubject',
  templateUrl: './schoolsubject.component.html',
  styleUrls: ['./schoolsubject.component.scss']
})
export class SchoolsubjectComponent {
  SchoolSubjectDataSource = new MatTableDataSource<SchoolSubject>();
  displayedColumns: string[] = ['subject', 'actions'];

  constructor(private schoolSubjectService: SchoolsubjectService, private router: Router) {}

  async ngOnInit() {
    await this.reloadData();
  }

  reloadData() {
    this.schoolSubjectService.getList().subscribe(obj => {
      this.SchoolSubjectDataSource.data = obj;
    });
  }
}
