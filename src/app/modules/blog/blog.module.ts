import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ThreeYearsComponent } from './pages/three-years/three-years.component';


@NgModule({
  declarations: [BlogComponent, ThreeYearsComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
