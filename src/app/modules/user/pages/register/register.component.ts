import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { DatabaseService } from 'src/app/core/services/database.service';
import { UserResponse } from 'src/app/shared/models/user-response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  get name() { return this.registerForm.get('pass') };
  get phoneNumber() { return this.registerForm.get('pass') };

  get pass() { return this.registerForm.get('pass') };
  get email() { return this.registerForm.get('email') };
  public registerForm = new FormGroup({
    
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required])

  })

  constructor(
    private authService: AuthenticationService,
    private databaseService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onRegister(): void {
    console.log('registerForm -->', this.registerForm.value);
    this.authService.registerUser(this.registerForm.value.email, this.registerForm.value.pass).then(resp => {
      console.log('ok register');
          this.router.navigate(['user/details']);
      const newUser: UserResponse = {
        email: resp.email,
        name: this.registerForm.value.name,
        phoneNumber: this.registerForm.value.phoneNumber,
        profile: '',
        uid: resp.uid,

      }

      this.databaseService.createUser(newUser).then(resp => {
        console.log('new user register firestore -->', resp);

      }).catch(error => {
        console.log('error register firestore -->', error);

      })


    })
  }
}
