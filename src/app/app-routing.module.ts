import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemesterComponent } from './pages/semester/semester.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { SchoolsubjectComponent } from './pages/schoolsubject/schoolsubject.component';
import { GradeComponent } from './pages/grade/grade.component';
import { SemesterDetailComponent } from './pages/semester-detail/semester-detail.component';

const routes: Routes = [
  {path: '', component: SemesterComponent},
  {path: 'semester', component: SemesterComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'schoolsubject', component: SchoolsubjectComponent},
  {path: 'grade', component: GradeComponent},
  {path: 'semesterDetail', component: SemesterDetailComponent},
  {path: 'semesterDetail/:id', component: SemesterDetailComponent},
  {path: 'schoolSubjectDetail', component: SchoolsubjectComponent},
  {path: 'schoolSubjectDetail/:id', component: SchoolsubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
