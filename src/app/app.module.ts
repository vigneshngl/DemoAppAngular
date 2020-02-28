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
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastService } from './forecast.service';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DatatableComponent } from './datatable/datatable.component';
import { MatTableModule } from '@angular/material/table';

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
    AsyncMessageComponent,
    ForecastComponent,
    LoginDialogComponent,
    DatatableComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    UsersService, 
    EmsService, 
    ApiService,
    ForecastService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
