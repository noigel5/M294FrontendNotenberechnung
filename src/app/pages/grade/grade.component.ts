import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Grade } from 'src/app/dataaccess/Grade';
import { GradeService } from 'src/app/service/grade.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit{
  GradeDataSource = new MatTableDataSource<Grade>();
  displayedColumns: string[] = ['description', 'grade', 'actions'];

  @Input()
  schoolSubjectId!: number;

  constructor(private gradeService: GradeService, private router: Router) {}

  async ngOnInit() {
    await this.reloadData();
  }

  reloadData() {
    this.gradeService.getList(this.schoolSubjectId).subscribe(obj => {
      this.GradeDataSource.data = obj;
    });
  }
}
