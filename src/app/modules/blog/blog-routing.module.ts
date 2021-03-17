import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { ThreeYearsComponent } from './pages/three-years/three-years.component';

const routes: Routes = [{path: '', children:
    [
      { path: '', component: BlogComponent },
      { path: 'three-years', component: ThreeYearsComponent },

    ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
