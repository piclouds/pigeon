import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { EmailsResponse } from '../models/emails-response';

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css']
})
export class EmailInboxComponent implements OnInit {

  @Input() titleLengthAllowance: number = 16;

  emails: EmailsResponse[] = [];

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    // Fetch list of emails
    this.emailService.getEmails().subscribe(response => {
      this.emails = response;
    });
  }

  // Summerize long subjects
  showEmailSubject(title: string): string {
    return (title.length > 16) ? title.substring(0, 25) + "..." : title;

  }

}
