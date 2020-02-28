import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeregtdComponent } from './employeeregtd/employeeregtd.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmpoloyeeregRfComponent } from './empoloyeereg-rf/empoloyeereg-rf.component';
import { EmsComponent } from './ems/ems.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { QuizListComponent } from './quiz/quiz.component';
import { PlannerComponent } from './planner/planner.component';
import { AsyncMessageComponent } from './async-message/async-message.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: "registration", component:RegistrationComponent, 
    children: [
      {path: "registrationT", component:EmployeeregtdComponent},
      {path: "registrationR", component:EmpoloyeeregRfComponent}
    ]
  },
  { path: "ems", component: EmsComponent, canActivate: [AuthGuard] },
  { path: "update/:id", component: UpdateEmployeeComponent, canActivate: [AuthGuard] },
  { path: "peekaboo", component: PeekABooParentComponent },
  { path: "quiz", component: QuizListComponent },
  { path: "todo", component: PlannerComponent },
  { path: "asyncpipe", component: AsyncMessageComponent },
  { path: "forecast", component: ForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
