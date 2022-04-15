import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';


// Routes config
const routes: Routes = [
  { path: 'signout', component: SignoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
