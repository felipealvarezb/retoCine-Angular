import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './layouts/admin-header/admin-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminActorsComponent } from './admin-actors/admin-actors.component';
import { AdminDirectorsComponent } from './admin-directors/admin-directors.component';
import { AdminCinemasComponent } from './admin-cinemas/admin-cinemas.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    DashboardComponent,
    AdminCategoriesComponent,
    AdminActorsComponent,
    AdminDirectorsComponent,
    AdminCinemasComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
