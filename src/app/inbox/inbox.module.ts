import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailPlaceholderComponent } from './email-placeholder/email-placeholder.component';


@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailInboxComponent,
    EmailReplyComponent,
    EmailShowComponent,
    EmailPlaceholderComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
