import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth, 
    private db: AngularFireDatabase, 
    private router: Router) {
      this.user = afAuth.authState;
    }

    singUp(email: string, password: string, displaName: string) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user)=> {
          this.authState = user;
        }).catch(error => console.log(error));
    }
}
