import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtObjectService } from 'src/app/core/services/art-object.service';
import { ArtObjectResponse } from 'src/app/shared/models/art-object-response';

@Component({
  selector: 'app-art-object',
  templateUrl: './art-object.component.html',
  styleUrls: ['./art-object.component.css']
})
export class ArtObjectComponent implements OnInit {
  public artObject: ArtObjectResponse;

  constructor(
    private artObjectService: ArtObjectService,
    private activatedRoute: ActivatedRoute

    ) { 

      activatedRoute.params.subscribe(params => {
        console.log('params -->', params);
       artObjectService.getObjectById(params.id).subscribe(resp => {this.artObject = resp;});
      })




  }

  ngOnInit() {
  }

}
