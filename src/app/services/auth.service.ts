import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private afa: AngularFireAuth) {}

  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
  }

  getAuth() {
    return this.afa.auth;
  }

  /* LOGOUT DO USUARIO */

  logout() {
    this.afa.auth.signOut();
  }
}
