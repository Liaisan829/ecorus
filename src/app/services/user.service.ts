import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "@models/userModel";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class UserService {
	token!: string

	constructor(private http: HttpClient,
				private router: Router) {
	}

	getProfile(user: User) {
		const request = new HttpRequest(
			'GET',
			'users',
			user,
			{
				reportProgress: true
			}
		)
		return this.http
			.request(request)
			.subscribe((event: HttpEvent<any>) => {
				switch (event.type) {
					case HttpEventType.Sent:
						console.log('data send')
						break
					case HttpEventType.DownloadProgress:
						console.log(`Downloading: ${event.loaded / 1024}Kb`)
						break
					case HttpEventType.Response:
						console.log('Response got with', event.status)
				}
			})
	}

	registration(newUser: User) {
		return new Observable(subscriber => {
				setTimeout(() => this.http
					.post('account', newUser)
					.subscribe(
						(resp: any) => {
							this.router.navigate(['profile']);
							localStorage.setItem('token', resp.id)
							this.token = resp.id
						}
					), 2000
				)
				subscriber.complete()
			}
		)
	}

	auth(newUser: User) {
		return new Observable(subscriber => {
			setTimeout(() => this.http
				.post('login', newUser)
				.subscribe(
					{
						next: (resp: any) => {
							this.router.navigate(['profile']);
							localStorage.setItem('token', resp.id)
						},
						error: err => console.log('Неверный логин или пароль')
					}
				), 2000)
			subscriber.complete()
		})
	}
}
