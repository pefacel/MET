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

  

  @Input() childMessage: string;



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
    private authService: AuthenticationService,
    private databaseService: DatabaseService,
    private router: Router

  ) { 

    this.authService.currentUSer().then(async resp => {

      console.log('usuario actual', resp);
      this.uid = resp.uid;

    }).catch(error => {
      console.log('error user', error);

    })


  }

  ngOnInit(): void {

    
    this.databaseService.getUser(this.uid).pipe(takeUntil(this.serviceSuscription)).subscribe(data => {

      console.log('Authservice: ', data);
      this.myUser = {

        email: data.email,
        phoneNumber: data.phoneNumber,
        profile: data.profile,
        name: data.name,
        uid: data.uid,
        favObjs: data.favObjs
      }
      console.log('my user ---> ', this.myUser);
    })



    console.log('localStorage email  ---> ', localStorage.getItem('email'));




  }

  setMostrar(): void {

    if (this.mostrar) {
      this.mostrar = false;
    }
    else {
      this.mostrar = true;

    }

  }

  toLogout(): void {

    this.authService.logout().then(resp => {

      try {
        console.log('logout exitoso  ==>', resp)

      } catch (error) {
        console.log('error logout  ==>', error)

      }



    })

  }


}
