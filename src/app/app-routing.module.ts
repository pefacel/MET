import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},

{ path: 'collections', loadChildren: () => import('./modules/collections/collections.module').then(m => m.CollectionsModule) },
{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
