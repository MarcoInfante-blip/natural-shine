import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'Natural Shine - Peluquería Sostenible';
}
