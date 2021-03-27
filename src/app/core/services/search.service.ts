import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _historial: string[] = [];

  get historial() {

    return [...this._historial];

  }

  searchCollection(query: string) {
   
    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query)){

      this._historial.unshift(query);

    }
   
   

    console.log(this._historial);


  }

}
