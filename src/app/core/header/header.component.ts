import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
export class HeaderComponent implements OnInit {

  




  public mostrar: boolean = false;
  public logout: any;
  public myUser: UserResponse = {
    email: '',
    phoneNumber: '',
    profile: '',
    name: '',
    uid: '',
   favObjs : []
  }
  public uid: string;
  private serviceSuscription: Subject<boolean> = new Subject();
  constructor(


  ) { 




  }

  ngOnInit(): void {

  
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
