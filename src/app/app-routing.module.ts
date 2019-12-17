import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/components/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'detail', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
