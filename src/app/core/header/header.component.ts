import { Component, Input, OnInit, Output } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserResponse } from 'src/app/shared/models/user-response';
import { AuthenticationService } from '../authentication/authentication.service';
import { DatabaseService } from '../services/database.service';
import { takeUntil } from 'rxjs/operators'
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  


  mostrar: boolean = false;

  showHead: boolean = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/user/details') {
            this.showHead = true;
            console.log("logged")

          } 
        }
      });
    }

  setMostrar(): void {

    if (this.mostrar) {
      this.mostrar = false;
    }
    else {
      this.mostrar = true;

    }

  }




}
