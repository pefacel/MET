import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { DatabaseService } from 'src/app/core/services/database.service';
import { UserResponse } from 'src/app/shared/models/user-response';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  constructor(



  ) {

  }

  ngOnInit() {




  }
}
