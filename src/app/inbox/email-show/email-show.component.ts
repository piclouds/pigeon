import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailBodyResponse } from '../models/email-body-response';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email!: EmailBodyResponse;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Pre-fetch to get avoid undefined email value on page load
    // Check '/inbox/email-resolver.service.ts'
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    })
  }

  ngOnInit(): void {
    // Get update from parameters

    // this.route.params.pipe(
    //   switchMap(({ id }) => {
    //     return this.emailService.getEmail(id);
    //   })
    // ).subscribe((email) => {
    //   this.email = email;
    // })
  }
}
