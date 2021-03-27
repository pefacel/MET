import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loadingSearch: string;

  constructor(   
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {


      this.loadingSearch=this.activatedRoute.snapshot.paramMap.get("search");
      this.router.navigate(['/collections/collection/' + this.loadingSearch]);

  }

  ngOnInit() {
  }

}
