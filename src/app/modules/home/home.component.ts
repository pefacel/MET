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
export class HomeComponent implements OnInit, OnDestroy {

  public myUser: UserResponse = {
    email: '',
    phoneNumber: '',
    profile: '',
    name: '',
    uid: ''

  }

  public uid: string;
  private serviceSuscription: Subject<boolean> = new Subject();
  constructor(
    private authService: AuthenticationService,
    private databaseService: DatabaseService,


  ) {
    this.authService.currentUSer().then(async resp => {

      console.log('usuario actual', resp);
      this.uid = resp.uid;

    }).catch(error => {
      console.log('error user', error);

    })

  }

  ngOnInit() {




    
    this.databaseService.getUser(this.uid).pipe(takeUntil(this.serviceSuscription)).subscribe(data => {

      console.log('Authservice: ', data);
      this.myUser = {

        email: data.email,
        phoneNumber: data.phoneNumber,
        profile: data.profile,
        name: data.name,
        uid: data.uid
      }
      console.log('my user ---> ', this.myUser);

    })
    console.log('localStorage email  ---> ', localStorage.getItem('email'));

  }


  ngOnDestroy() {

console.log('service desuscrito -->', this.serviceSuscription);
this.serviceSuscription.next(false);
this.serviceSuscription.complete();

  }

}
