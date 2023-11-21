import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminActorsComponent } from './admin-actors/admin-actors.component';
import { AdminDirectorsComponent } from './admin-directors/admin-directors.component';
import { AdminCinemasComponent } from './admin-cinemas/admin-cinemas.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';


const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'admin/categories', component: AdminCategoriesComponent},
  {path: 'admin/actors', component: AdminActorsComponent},
  {path: 'admin/directors', component: AdminDirectorsComponent},
  {path: 'admin/cinemas', component: AdminCinemasComponent},
  {path: 'admin/register', component: RegisterComponent},
  {path: 'admin/login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
