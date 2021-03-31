import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/core/services/collections.service';
import { HighlightService } from 'src/app/core/services/highlight.service';
import { CollectionsResponse } from 'src/app/shared/models/collections-response';
import { Highlight } from 'src/app/shared/models/highlight';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent  {
  highlight: Highlight[] = [];

  constructor(private highlightService:HighlightService) { 
    this.highlight = this.highlightService.getHighlight();
  }



}




