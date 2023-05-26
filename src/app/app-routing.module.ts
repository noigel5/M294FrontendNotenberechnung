import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemesterComponent } from './pages/semester/semester.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

const routes: Routes = [
  {path: '', component: SemesterComponent},
  {path: 'semester', component: SemesterComponent},
  {path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
