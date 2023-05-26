import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemesterComponent } from './pages/semester/semester.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { SchoolsubjectComponent } from './pages/schoolsubject/schoolsubject.component';
import { GradeComponent } from './pages/grade/grade.component';

const routes: Routes = [
  {path: '', component: SemesterComponent},
  {path: 'semester', component: SemesterComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'schoolsubject', component: SchoolsubjectComponent},
  {path: 'grade', component: GradeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
