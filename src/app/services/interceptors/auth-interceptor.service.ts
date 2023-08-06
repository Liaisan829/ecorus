import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { StartsWithHttp } from './url-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
	constructor(private auth: UserService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(this.addToken(request));
	}

	addToken(request: HttpRequest<any>): HttpRequest<any> {
		const headers =
			this.auth?.token && !request.context.get(StartsWithHttp)
				? request.headers.set('Authorization', `Bearer ${this.auth.token}`)
				: request.headers;

		return request.clone({
			headers,
		});
	}
}
