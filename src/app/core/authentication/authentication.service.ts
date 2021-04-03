import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    public  router:  Router

  ) { }

  async login(email:string, pass:string){

    try {
      const respAuth = await this.angularFireAuth.signInWithEmailAndPassword(email,pass);
      console.log('resp Auth -->', respAuth);
      this.router.navigate(['user/details']);

    } catch (error) {
      console.error('error auth -->', error);
    }

  }
   logout() {

    try {

      const logoutResp =  this.angularFireAuth.signOut();

      console.log('logout exitoso');
      this.router.navigate(['home']);

      localStorage.clear();

      return logoutResp;

    } catch (error) {
      console.log('logout error'), error;
      return error;
    }

  }




  async currentUser() {
    try {
      const currentUserResp = this.angularFireAuth.currentUser;
      console.log('currentUser service -->', currentUserResp);
      localStorage.setItem('logged','true');
      return currentUserResp;
    } catch (error) {
      console.log('error current user -->', error);
    }
  }

  async registerUser(email: string, pass: string) {
    try {
      const respRegister = await this.angularFireAuth.createUserWithEmailAndPassword(email, pass);
      console.log('resp registerUser-->', respRegister);

      return respRegister.user;
    } catch (error) {
      console.log('error registerUser-->', error);
      throw (error)

    }


  }


}
