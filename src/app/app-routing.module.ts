import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {DoctorDashboardComponent} from './dashboard/doctor-dashboard/doctor-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorDashboardComponent
  },
  {
    path: 'dashboard',
    component: DoctorDashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
