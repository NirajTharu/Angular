import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('angular_Practice');
  title = 'Angular_Practice';
  username = 'nirajtharu3';
  imgUrl = 'Facebook.svg';
  showAlert() {
    alert('Who you are?');
  }
  Name = '';
}
