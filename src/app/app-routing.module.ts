import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DoctorDashboardComponent } from './dashboard/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { MemberDashboardComponent } from './dashboard/member-dashboard/member-dashboard.component';
import { FamilyMemberDashboardComponent } from './dashboard/family-member-dashboard/family-member-dashboard.component';
import { ProviderDashboardComponent } from './dashboard/provider-dashboard/provider-dashboard.component';



import { RegisterComponent } from './auth/register/register.component';
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
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'member-dashboard',
    component: MemberDashboardComponent
  },
  {
    path: 'family-member-dashboard',
    component: FamilyMemberDashboardComponent
  },
  {

    path: 'provider-dashboard',
    component: ProviderDashboardComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
