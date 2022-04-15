import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, tap } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string,
  password: string,
  passwordConfiguration: string
}

interface SigninCredentials {
  username: string,
  password: string
}

interface SignupResponse {
  username: string
}

interface SignedinResponse {
  authenticated: boolean,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = "https://api.angular-email.com/auth/"
  
  isSignedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  // Check if username is available for register (Unique)
  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(this.authUrl + 'username', {
      username: username
    });
  }

  // Signup new user
  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(this.authUrl + 'signup', credentials).pipe(
      tap(() => {
        this.isSignedin$.next(true);
      })
    );
  }

  // Signin user
  signin(credentials: SigninCredentials) {
    return this.http.post(this.authUrl + 'signin', credentials).pipe(
      tap(() => {
        this.isSignedin$.next(true);
      })
    )
  }

  // Is user signed in
  checkAuth() {
    return this.http.get<SignedinResponse>(this.authUrl + 'signedin').pipe(
      tap(({authenticated}) => {
        this.isSignedin$.next(authenticated);
      })
    )
  }

  // Sign use out
  signout() {
    return this.http.post(this.authUrl + 'signout', {}).pipe(
      tap(() => {
        this.isSignedin$.next(false);
      })
    )
  }

}
