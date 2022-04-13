import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Check if username is available for register (Unique)
  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>('https://api.angular-email.com/auth/username', {
      username: username
    });
  }

  // Signup new user
  signup(credentials: SignupCredentials) {
    return this.http.post<any>('https://api.angular-email.com/auth/signup', credentials);
  }


}
