import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthHttpInterceptor } from './auth/auth-http-interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // Override the dependancy injection system
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
