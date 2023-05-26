import { Component } from '@angular/core';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})

export class SemesterComponent {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  id: number;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Semester 1'}
];
