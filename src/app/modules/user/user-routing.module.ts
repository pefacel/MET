import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  
  {path: '', children:
    [
      
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'details', component: DetailsComponent,  canActivate: [AuthGuard]    },

   
    ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
