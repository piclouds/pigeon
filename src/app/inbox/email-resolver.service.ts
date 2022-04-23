import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EmailService } from './email.service';
import { EmailBodyResponse } from './models/email-body-response';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<EmailBodyResponse> {

  // private routeSnapshot: ActivatedRouteSnapshot
  constructor(private emailService: EmailService) { }
  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;

    return this.emailService.getEmail(id);
    
  }
}
