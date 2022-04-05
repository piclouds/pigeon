import { Injectable } from "@angular/core";

import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {

    constructor(private authService: AuthService) { }

    validate = (control: AbstractControl): Observable<ValidationErrors | null> => {
        const { value } = control;
        
        return this.authService.usernameAvailable(value).pipe(
            // If no error, username available (is unique)
            map(() => { return null }),

            // If error, either username not available or connection error
            catchError((err) => {
                console.log(err)
                if (err.error.username) {
                    return of({ nonUniqueUsername: true })
                } else {
                    return of({ connectionError: true })
                }
            })
        )
    }
}
