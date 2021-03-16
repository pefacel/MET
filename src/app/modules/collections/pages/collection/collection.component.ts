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
  public objectsIds = [];
  public artObjects: ArtObjectResponse[] = [];
  public zoomPer: number = 50;
  public title = '';


  constructor(
    private artObjectService: ArtObjectService,
    private collectionsService: CollectionsService,
    private activatedRoute: ActivatedRoute

  ) {

    activatedRoute.params.subscribe(params => {
      console.log('params -->', params);

      collectionsService.getCollectionBySearch(params.search).subscribe(resp => {
        this.collection = resp;
        this.title = params.search + ' collection';
        for (var i = 0; i < 30; i++) {
          var num = this.collection.objectIDs[i];
          artObjectService.getObjectById(num).subscribe(resp => {
            this.artObjects.push(resp)
          });
          this.objectsIds.push(num);
        }
      })
    });
  }

  ngOnInit() { }



  zoomLevel(zoomPick: number) {

    this.zoomPer = zoomPick;
    console.log('zoom', this.zoomPer);
  }

  moreZoom() {
    if (this.zoomPer < 100) {
      this.zoomPer += 25;
    }

  }
  lessZoom() {
    if (this.zoomPer > 50) {
      this.zoomPer -= 25;
    }

  }




}
