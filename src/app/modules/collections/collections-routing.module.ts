import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtObjectComponent } from './pages/art-object/art-object.component';
import { CollectionsComponent } from './pages/collections/collections.component';


const routes: Routes =



[

  {path:'', 

    children:[
      {path: '', component: CollectionsComponent},

      {path: 'object', component: ArtObjectComponent}
  
    
  ]}





];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
