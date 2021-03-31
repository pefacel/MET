import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  public zoomPer: number = 75;
  public title = '';
  page_size: number = 6;
  page_number: number = 1;
  totalObjects: number = 0;
  pageSizeOptions = [6, 12, 36, 72, 144];
  topNumber=0;

  constructor(
    private artObjectService: ArtObjectService,
    private collectionsService: CollectionsService,
    private activatedRoute: ActivatedRoute

  ) {

    activatedRoute.params.subscribe(params => {
      console.log('params -->', params);

      collectionsService.getCollectionBySearch(params.search).subscribe(resp => {
        this.collection = resp;
        this.totalObjects = this.collection.total
        this.title = params.search + ' collection';
        this.load()

      })
    });
  }

  ngOnInit() { }

  handlePage(e: PageEvent) {
    console.log('pre pageSize', this.page_size)
    this.page_size = e.pageSize;
    console.log('post pageSize', this.page_size)
    console.log('pre page_number', this.page_number)

    this.page_number = e.pageIndex + 1;
    console.log('post page_number', this.page_number)
    this.load()
  }

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

  load() {
    console.log('pre this.topNumber', this.topNumber)
if(this.topNumber<this.page_number * this.page_size){

  for (var i = this.topNumber; i < this.page_number * this.page_size; i++) {


    var num = this.collection.objectIDs[i];
    this.artObjectService.getObjectById(num).subscribe(resp => {
      this.artObjects.push(resp)
    });
    this.objectsIds.push(num);
  }
  this.topNumber=this.page_number * this.page_size
}

console.log('post this.topNumber', this.topNumber)

  }


}
