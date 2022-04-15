import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignedin$: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {
    this.isSignedin$ = this.authService.isSignedin$;
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});
  }
}
