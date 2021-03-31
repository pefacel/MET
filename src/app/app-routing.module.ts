import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { ContactComponent } from './modules/contact/contact.component';
import { DepartmentsComponent } from './modules/departments/departments.component';


const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'contact', component: ContactComponent },
{ path: 'department', component: DepartmentsComponent },


{ path: 'collections', loadChildren: () => import('./modules/collections/collections.module').then(m => m.CollectionsModule) },
{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
{ path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
{ path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
