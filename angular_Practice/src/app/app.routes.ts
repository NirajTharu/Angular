import { Routes } from '@angular/router';
import { ContactUs } from './contact-us/contact-us';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: Home },
  { path: 'ContactUs', component: ContactUs },
  { path: 'AboutUs', component: AboutUs },
];
