import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ArtObjectComponent } from './pages/art-object/art-object.component';


@NgModule({
  declarations: [CollectionsComponent, ArtObjectComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
