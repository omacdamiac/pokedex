import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from "./guards/auth.guard";
import { NoAuthGuard } from "./guards/no-auth.guard";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
  {path: 'home', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'pokemon/:id', component: DetailComponent, canActivate: [AuthGuard]},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
