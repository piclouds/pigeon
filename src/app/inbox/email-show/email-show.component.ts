import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { EmailBodyResponse } from '../models/email-body-response';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email: EmailBodyResponse | null = null;

  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.emailService.getEmail(this.route.snapshot.params['id']).subscribe(response => {
    //   this.email = response;
    // });

    // Get update from parameters
    this.route.params.subscribe(params => {
      if (!params['id'])
        return;

      // Get selected email
      this.emailService.getEmail(params['id']).subscribe(response => {
        this.email = response;
      })
    })
  }

}
