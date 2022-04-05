import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        throw new Error("Method not implemented.");
    }
}
