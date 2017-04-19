/*
*     Created by: Jan Giacomelli <jan.giacomelli@result.si>
*     App routing module
*/
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {ManageCarsComponent} from "../cars/manage-cars/manage-cars.component";

/**
 * App routing module
 * @type {({path: string; children: ({path: string; component: SignInComponent}|{path: string; component: LoginComponent}|{path: string; component: ForgetPasswordComponent}|{path: string; component: ActivateAccountComponent}|{path: string; component: ResendMailComponent}|{path: string; component: ProfileComponent; canActivate: AuthGuardService[]})[]}|{path: string; canActivate: AuthGuardService[]; children: ({path: string; component: ConnectorsMainComponent}|{path: string; component: MyFilesDetailsComponent})[]}|{path: string; canActivate: AuthGuardService[]; children: ({path: string; canActivate: Array; children: {path: string; component: CreateDashboardComponent}[]}|{path: string; canActivate: LimitGuardService[]; children: {path: string; component: PageNotFoundComponent}[]})[]}|{path: string; component: LimitReachedComponent}|{path: string; redirectTo: string; pathMatch: string}|{path: string; component: PageNotFoundComponent})[]}
 */
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'manage-cars', component: ManageCarsComponent},
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
