import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = 'Tuna';
  passwordStatus = false;
  clicks = [];

  getPassword() {
    this.passwordStatus = !this.passwordStatus;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }
}
