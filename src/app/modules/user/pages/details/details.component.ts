import { Component,  Input,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { DatabaseService } from 'src/app/core/services/database.service';
import { UserResponse } from 'src/app/shared/models/user-response';
import { takeUntil } from 'rxjs/operators'
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  


  public favOK:boolean=false;
  public favCollections=[];



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

  ngOnInit() {




    
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


  seeFav() {
    this.favOK = this.favOK === false ? true : false;
 }
    

 setFav(fav: string) {
  
this.favCollections.push(fav);

this.router.navigate(['/collections/collection/' + fav]);

}



}
