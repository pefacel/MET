import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ArtObjectComponent } from './pages/art-object/art-object.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { LoadingComponent } from './pages/loading/loading.component';


@NgModule({
  declarations: [CollectionsComponent, ArtObjectComponent, CollectionComponent, LoadingComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
