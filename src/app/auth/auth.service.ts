import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string,
  password: string,
  passwordConfiguration: string
}

interface SignupResponse {
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
    return this.http.post<SignupResponse>(this.authUrl + 'signup', credentials);
  }


}
