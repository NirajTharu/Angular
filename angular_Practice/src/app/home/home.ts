import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, FormsModule, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  data: any;
  user = {
    name: '',
    email: '',
  };
  submitted = false;
  onSubmit(form: any) {
    this.submitted = true;
    console.log(this.user);
  }
}
