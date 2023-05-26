import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Grade } from 'src/app/dataaccess/Grade';
import { GradeService } from 'src/app/service/grade.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent {
  GradeDataSource = new MatTableDataSource<Grade>();
  displayedColumns: string[] = ['description', 'grade', 'actions'];

  constructor(private gradeService: GradeService, private router: Router) {}

  async ngOnInit() {
    await this.reloadData();
  }

  reloadData() {
    this.gradeService.getList().subscribe(obj => {
      this.GradeDataSource.data = obj;
    });
  }
}
