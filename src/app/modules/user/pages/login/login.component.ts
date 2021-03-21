import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { DatabaseService } from 'src/app/core/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  get pass() { return this.loginForm.get('pass') };
  get email() { return this.loginForm.get('email') };
  
    public loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      pass: new FormControl('',[Validators.required])
  
    })
  
    constructor(
  
      private authService: AuthenticationService,
      private databaseService: DatabaseService

    ) { }
  
    ngOnInit(): void {
    }
    onLogin() {
  
      this.authService.login(this.loginForm.value.email, this.loginForm.value.pass).then(resp => {
  
        console.log('reponse login:', resp)
  


      }).catch(error => {
  
        console.error(error)
      })
  
    }

    hola ='hola q tal';

    faxx(param: any){

      console.log('event', param);
  
    }







}
