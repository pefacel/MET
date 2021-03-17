import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserResponse } from 'src/app/shared/models/user-response';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public userBd: any;

  constructor(
    private angularFirestore: AngularFirestore

  ) { }


  async createUser(newUser: UserResponse): Promise<string> {

    try {
      const respNewUser = await this.angularFirestore.collection('users').add(newUser);
      console.log('response createUser -->', respNewUser);

      return respNewUser.id;
    } catch (error) {
      console.log('error createUser -->', error)

      throw (error)

    }

  }

  getUser(uid: string): Observable<UserResponse> {
    return new Observable(observer => {
      this.angularFirestore.firestore.collection('users').where('uid', '==', uid).get().then(querySnapshot => {
        querySnapshot.forEach(resp => {
          this.userBd = resp.data();
        })
        observer.next(this.userBd);
        observer.complete();
      }).catch(error => {
        console.log('error call service firestore -->', error);
        observer.error(error);
        observer.complete();
      })
    });
  }




  
}