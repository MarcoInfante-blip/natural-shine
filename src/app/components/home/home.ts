import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero';
import { ServicesComponent } from '../services/services';
import { CtaComponent } from '../cta/cta';
import { PortfolioComponent } from '../portfolio/portfolio';
import { TestimonialsComponent } from '../testimonials/testimonials';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        ServicesComponent,
        CtaComponent,
        PortfolioComponent,
        TestimonialsComponent
    ],
    templateUrl: './home.html'
})
export class HomeComponent { }
