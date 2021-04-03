import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
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

  user: string = '';
  private serviceSuscription: Subject<boolean> = new Subject();

  constructor(private router: Router,private authService: AuthenticationService) {
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/user/details') {
            console.log('true logged ', this.authService.currentUser());

         
            this.showHead = true;
            console.log("logged")

          } 
        }
      });

this.user = localStorage.getItem('email');

    }

  setMostrar(): void {

    if (this.mostrar) {
      this.mostrar = false;
    }
    else {
      this.mostrar = true;

    }

  }

  logout(): void {

    this.authService.logout();
this.showHead = false
  }



}
