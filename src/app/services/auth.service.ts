import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./user.model";

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // Get auth state, then fetch Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in?
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  /*
googleSignIn(): Triggers Google Signin popup window and authenticates the user.
RETURNs -> Promise that resolves auth credential
*/

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  /*
updateUserData(user): Initializes custom data in Firestore.
PARAMs -> user
SETs -> custom user data
REQUIRE { merge: true } to make SET non-destructive for returning users
*/

  private updateUserData({ uid, email, displayName, photoURL }: User) {
    // Sets user data to Firestor login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${uid}`
    );

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true });
  }

  /*
signOut(): Signs out user and navigates to safe route
*/

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(["/"]);
  }
}
