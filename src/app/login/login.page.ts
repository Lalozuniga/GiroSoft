import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  isActive: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleState(state: boolean) {
    this.isActive = state;
  }

}
