import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtObjectService } from 'src/app/core/services/art-object.service';
import { CollectionsService } from 'src/app/core/services/collections.service';
import { ArtObjectResponse } from 'src/app/shared/models/art-object-response';
import { CollectionResponse } from 'src/app/shared/models/collection-response';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  public collection: CollectionResponse;
  public artObject: ArtObjectResponse;

  public paginator: number[];

  constructor(
    private artObjectService: ArtObjectService,
    private collectionsService: CollectionsService,
    private activatedRoute: ActivatedRoute

  ) { 

    activatedRoute.params.subscribe(params => {
      console.log('params -->', params);
      collectionsService.getCollectionById(params.id).subscribe(respCharacter => {
        this.collection = respCharacter;
      })
    });

    artObjectService.getObjectById(444).subscribe(resp => {
      this.artObject = resp;
    });

  }

  ngOnInit() {
  }

}
