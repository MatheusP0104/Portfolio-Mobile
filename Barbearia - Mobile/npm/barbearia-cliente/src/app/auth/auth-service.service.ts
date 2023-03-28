import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData: any

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router
  ) {}

   // Login in with email/password
   SignIn(email, senha) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, senha);
  }

   // Register user with email/password
   RegisterUser(email, senha) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, senha);
  }


   // Email verification when new user register
   SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user) => {
      return user.sendEmailVerification().then(() => {
        this.router.navigate(['/tela-login']);
      });
    });
  }

   // Returns true when user is looged in
   get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.emailVerified !== false ? true : false;
  }


  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Senha Recuperada'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }

   // Sign-out
   SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('Users');
      this.router.navigate(['/tela-login']);
    });
  }
}
