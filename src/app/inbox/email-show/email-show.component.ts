import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get update from parameters
    this.route.params.pipe(
      switchMap(({ id }) => {
        return this.emailService.getEmail(id);
      })
    ).subscribe((email) => {
      this.email = email;
    })

    // subscribe(params => {
    //   if (!params['id'])
    //     return;

    //   // Get selected email
    //   this.emailService.getEmail(params['id']).subscribe(response => {
    //     this.email = response;
    //   })
    // })
  }


}
