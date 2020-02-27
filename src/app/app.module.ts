import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { HighlightDirective } from './highlight.directive';
import { EmployeeregtdComponent } from './employeeregtd/employeeregtd.component';
import { UsersService } from './users.service';
import { RegistrationComponent } from './registration/registration.component';
import { NavComponent } from './nav/nav.component';
import { EmpoloyeeregRfComponent } from './empoloyeereg-rf/empoloyeereg-rf.component';
import { EmsComponent } from './ems/ems.component';
import { EmsService } from './ems.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { PeekABooComponent } from './peek-a-boo.component';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { QuizComponent, QuizListComponent } from './quiz/quiz.component';
import { ApiService } from './api.service';
import { PlannerComponent } from './planner/planner.component';
import { SalaryPipe } from './salary.pipe';
import { AsyncMessageComponent } from './async-message/async-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent,
    EmpdashboardComponent,
    HighlightDirective,
    EmployeeregtdComponent,
    RegistrationComponent,
    NavComponent,
    EmpoloyeeregRfComponent,
    EmsComponent,
    UpdateEmployeeComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    QuizComponent,
    QuizListComponent,
    PlannerComponent,
    SalaryPipe,
    AsyncMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService, 
    EmsService, 
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
