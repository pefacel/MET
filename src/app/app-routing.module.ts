import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiMetComponent } from './modules/api-met/api-met.component';

import { ContactComponent } from './modules/contact/contact.component';
import { DepartmentsComponent } from './modules/departments/departments.component';


const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'contact', component: ContactComponent },
{ path: 'department', component: DepartmentsComponent },
{ path: 'api-met', component: ApiMetComponent },


{ path: 'collections', loadChildren: () => import('./modules/collections/collections.module').then(m => m.CollectionsModule) },
{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
{ path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
