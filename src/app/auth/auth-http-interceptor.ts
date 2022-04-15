import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, Observable, tap } from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Update withCredential to store the cookie
        const modifiedReq = req.clone({
            withCredentials: true
        });

        return next.handle(modifiedReq);
    }



}
