import { Injectable } from '@angular/core';
import { Highlight } from 'src/app/shared/models/highlight';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  private _departments: Highlight[] = [

    {
      name: "Masks",
      img: "https://images.metmuseum.org/CRDImages/ao/web-large/DT1234.jpg",
      total: 1488
    },
    {
      name: "Japanese Woodcuts",
      img: "https://images.metmuseum.org/CRDImages/as/web-large/DP138907.jpg",
      total: 3732
    },
    {
      name: "Chiaroscuro Woodcuts",
      img: "https://images.metmuseum.org/CRDImages/dp/web-large/DP842118.jpg",
      total: 161
    },
    {
      name: "Félix Vallotton's Woodcuts",
      img: "https://images.metmuseum.org/CRDImages/dp/web-large/DP814788.jpg",
      total: 127
    },
    {
      name: "Cats",
      img: "https://images.metmuseum.org/CRDImages/eg/web-large/40.5_EGDP014380.jpg",
      total: 23480
    },
    {
      name: "Dogs",
      img: "https://images.metmuseum.org/CRDImages/dp/web-large/DP874652.jpg",
      total: 3494
    },
    {
      name: "Musical Instruments ",
      img: "https://images.metmuseum.org/CRDImages/mi/web-large/DP-12679-017.jpg",
      total: 43
    },
    {
      name: "Inca",
      img: "https://images.metmuseum.org/CRDImages/ao/web-large/ra33.149.100.R.jpg",
      total: 343
    },
    
    

    ];

    getHighlight(): Highlight[] {
      return this._departments;
    }
}
