import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/core/services/collections.service';
import { CollectionsResponse } from 'src/app/shared/models/collections-response';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  public collections: CollectionsResponse;

  constructor(private collectionsService: CollectionsService) {


    collectionsService.getCollections().subscribe(resp => {
      this.collections = resp;
    });

  }

  ngOnInit() {

  }



}




