import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailBodyResponse } from './models/email-body-response';
import { EmailsResponse } from './models/emails-response';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailsUrl = "https://api.angular-email.com/emails";

  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<EmailsResponse[]>(this.emailsUrl);
  }

  getEmail(id: string) {
    return this.http.get<EmailBodyResponse>(this.emailsUrl + '/' + id);
  }

}
