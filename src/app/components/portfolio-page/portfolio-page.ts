import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CtaComponent } from '../cta/cta';
import { TestimonialsComponent } from '../testimonials/testimonials';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent, TestimonialsComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements AfterViewInit {
  portfolioCategories = [
    {
      title: 'Alisados Orgánicos',
      image: 'https://i.pinimg.com/1200x/f3/7d/1e/f37d1ee7c897cd8317fcadce970c4d21.jpg'
    },
    {
      title: 'Recuperación Capilar',
      image: 'https://i.pinimg.com/736x/03/55/b7/0355b7e98b670d507b867951360a9e44.jpg'
    },
    {
      title: 'Coloración Natural',
      image: 'https://i.pinimg.com/736x/d5/ae/6e/d5ae6e2652c041c4fed71bc75740935b.jpg'
    },
    {
      title: 'Nutrición & Brillo',
      image: 'https://i.pinimg.com/736x/70/b3/2a/70b32a72235d59b5a3ca6b96af8b33a5.jpg'
    }
  ];

  healthGalleryItems = [
    { type: 'image', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80' },
    { type: 'image', image: 'https://i.pinimg.com/736x/44/5c/b1/445cb155ad8b1c95dcb214a0de74b8ed.jpg' },
    { type: 'image', image: 'https://i.pinimg.com/1200x/8f/80/a6/8f80a6b1655bc26a88681ba653e14fe3.jpg' },
    { type: 'image', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
    { type: 'image', image: 'https://i.pinimg.com/1200x/46/b5/b6/46b5b6f20c9a2256fbed9f86a7c38672.jpg' },
    { type: 'image', image: 'https://i.pinimg.com/736x/6e/76/19/6e7619b3fbf300027ceec4a6438b3a61.jpg' },
    { type: 'image', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80' },
    { type: 'image', image: 'https://i.pinimg.com/736x/75/40/83/7540836f4593382f40ecb869c0864a61.jpg' }
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

    // SOLO observar gallery items - NO las category-card
    const elements = this.elementRef.nativeElement.querySelectorAll('.gallery-item');
    elements.forEach((el: Element) => {
      observer.observe(el);
    });
  }
}