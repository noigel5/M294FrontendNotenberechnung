import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Semester } from 'src/app/dataaccess/Semester';
import { SemesterService } from 'src/app/service/semester.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})

export class SemesterComponent {
  SemesterDataSource = new MatTableDataSource<Semester>();
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private semesterService: SemesterService) {}

  async ngOnInit() {
    await this.reloadData();
  }

  reloadData() {
    this.semesterService.getList().subscribe(obj => {
      this.SemesterDataSource.data = obj;
    });
  }
}
