import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtObjectComponent } from './pages/art-object/art-object.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { LoadingComponent } from './pages/loading/loading.component';


const routes: Routes =
  [
    {path: '', children: 
      [
        {path: '', children:
            [
              {path: '', component: CollectionsComponent },
              {path: 'loading/:search', component: LoadingComponent },       
              {path: 'collection/:search', children:
                  [
                    { path: '', component: CollectionComponent },
                    { path: 'object/:id', component: ArtObjectComponent },
                  ]

              },
            ]

        },
      ]
    }
  ];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
