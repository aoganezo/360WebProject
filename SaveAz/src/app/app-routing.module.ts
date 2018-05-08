import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ItemsLikedComponent }   from './items-liked/items-liked.component';
import { AlertsComponent }   from './alerts/alerts.component';

const routes:Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'items-liked', component: ItemsLikedComponent },
	{ path: 'alerts', component: AlertsComponent }
	];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
