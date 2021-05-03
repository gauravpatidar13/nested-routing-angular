import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeavesComponent } from './leaves/leaves.component';


const routes: Routes = [
  {path:'',component:LeavesComponent,loadChildren:()=>import('./leaves/leaves.module').then(m=>m.LeavesModule)},
  {
  path:'dashboard',  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
