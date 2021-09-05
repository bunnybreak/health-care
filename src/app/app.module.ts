import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {DoctorDashboardComponent} from './dashboard/doctor-dashboard/doctor-dashboard.component';
import {DoctorSidebarComponent} from './sidebar/doctor-sidebar/doctor-sidebar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './auth/register/register.component';
import {AdminSidebarComponent} from './admin-sidebar/admin-sidebar.component';
import {FamilyMemberSidebarComponent} from './sidebar/family-member-sidebar/family-member-sidebar.component';
import {MemberSidebarComponent} from './sidebar/member-sidebar/member-sidebar.component';
import {PproviderSidebarComponent} from './sidebar/pprovider-sidebar/pprovider-sidebar.component';
import {ProviderSidebarComponent} from './sidebar/provider-sidebar/provider-sidebar.component';
import {ProviderDashboardComponent} from './dashboard/provider-dashboard/provider-dashboard.component';
import {MemberDashboardComponent} from './dashboard/member-dashboard/member-dashboard.component';
import {FamilyMemberDashboardComponent} from './dashboard/family-member-dashboard/family-member-dashboard.component';
import {AdminDashboardComponent} from './dashboard/admin-dashboard/admin-dashboard.component';


/* Add Amplify imports */
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import Amplify from '@aws-amplify/core';
import { LoaderComponent } from './loader/loader.component';

/* Configure Amplify resources */
Amplify.configure({
    Auth: {
        mandatorySignIn:true,
        region: 'us-east-2',
        userPoolId: 'us-east-2_SepC5KKtT',
        userPoolWebClientId: '2rhk871mmt3sd7db5j32ql73l8',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DoctorDashboardComponent,
        DoctorSidebarComponent,
        SidebarComponent,
        DashboardComponent,
        RegisterComponent,
        AdminSidebarComponent,
        FamilyMemberSidebarComponent,
        MemberSidebarComponent,
        PproviderSidebarComponent,
        ProviderSidebarComponent,
        ProviderDashboardComponent,
        MemberDashboardComponent,
        FamilyMemberDashboardComponent,
        AdminDashboardComponent,
        LoaderComponent
    ],
    imports: [
        AmplifyUIAngularModule,
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
