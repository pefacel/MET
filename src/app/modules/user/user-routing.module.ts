import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

import { UserComponent } from './user.component';

const routes: Routes = [
  
  {path: '', children:
    [
      { path: '', component: UserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'details', component: DetailsComponent,   },

    //  canActivate: [AuthGuard] 
    ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
