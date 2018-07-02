import { Component, OnInit } from '@angular/core';
import { UserService, UNKNOWN_USER } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../shared/model/user';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  isLoggedIn$: Observable<boolean>

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.user$.map(user => {
      return user !== UNKNOWN_USER
    })
    
  }

}
