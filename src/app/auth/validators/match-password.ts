import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, Validator } from "@angular/forms";


@Injectable({
    providedIn: 'root'
})
export class MatchPassword implements Validator {
    validate(formGroup: AbstractControl) {
        const { password, passwordConfirmation } = formGroup.value;

        // If passwords match
        if(password === passwordConfirmation)
            return null;

        return { passwordsDontMatch: true }
    }

}
