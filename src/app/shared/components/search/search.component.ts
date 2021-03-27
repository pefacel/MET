import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  @ViewChild ('txtSearch', { static: true }) txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private searchService: SearchService, private router: Router) { }

  search() {
    const valor = this.txtSearch.nativeElement.value;
    if(valor.trim().length === 0) {return;}

    this.searchService.searchCollection(valor);
    this.txtSearch.nativeElement.value = '';
    // this.router.navigate(['/collections/collection/' + valor]);
    this.router.navigate(['/collections/loading/' + valor]);

  }

}
