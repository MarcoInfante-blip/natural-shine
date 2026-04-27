import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ServicesPageComponent } from './components/services-page/services-page';

import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page';

import { ContactPageComponent } from './components/contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Natural Shine - Inicio' },
    { path: 'nosotros', component: AboutComponent, title: 'Natural Shine - Nosotros' },
    { path: 'servicios', component: ServicesPageComponent, title: 'Natural Shine - Servicios' },
    { path: 'portfolio', component: PortfolioPageComponent, title: 'Natural Shine - Portfolio' },
    { path: 'contacto', component: ContactPageComponent, title: 'Natural Shine - Contacto' },
    { path: '**', redirectTo: '' }
];
