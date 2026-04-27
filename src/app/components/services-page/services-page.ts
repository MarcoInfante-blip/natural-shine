import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from '../testimonials/testimonials';
import { PortfolioComponent } from '../portfolio/portfolio';

@Component({
  selector: 'app-services-page',
  imports: [CommonModule, RouterModule, TestimonialsComponent, PortfolioComponent],
  templateUrl: './services-page.html',
  styleUrls: ['./services-page.scss']
})
export class ServicesPageComponent implements AfterViewInit {
  services = [
    {
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
      title: 'Tratamientos y Rituales',
      description: 'Disponemos de múltiples tratamientos adaptados a tus necesidades. El cuidado del cabello no es solo el color o el corte, el mantenimiento del mismo es fundamental para su salud.',
      reverse: false
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
      title: 'Alisados Orgánicos',
      description: 'Tanto si quieres el cabello liso y controlado, como si tan solo quieres controlar el encrespamiento sin perder la forma de tu cabello, disponemos de soluciones personalizadas.',
      reverse: true
    }
  ];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.initScrollReveal();
  }

  private initScrollReveal() {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        } else {
          entry.target.classList.remove('revealed');
        }
      });
    }, observerOptions);

    // Observe all service sections
    const sections = this.elementRef.nativeElement.querySelectorAll('.service-section-alt, .portfolio-section-services, .testimonials-section-services');
    sections.forEach((section: Element) => {
      observer.observe(section);
    });
  }
}
