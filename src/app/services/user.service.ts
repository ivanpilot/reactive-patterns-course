import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/observable/of';
import { User } from '../shared/model/user';
import { Http, Headers } from '@angular/http';

export const UNKNOWN_USER: User = {
  firstName: 'Unknown'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subject = new BehaviorSubject(UNKNOWN_USER);
  user$: Observable<User> = this.subject.asObservable()
  // user$: Observable<User> = Observable.of(UNKNOWN_USER)


  constructor(private http: Http) { }

  login(email: string, password: string) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    this.http.post('/api/login/', {email, password}, {headers})
      .map(res => res.json())
      .subscribe(
        user => this.subject.next(user),
        () => alert('Login Failed')
      )
  }
}
