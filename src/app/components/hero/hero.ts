import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  tag: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('heroContainer', { static: true }) heroContainer!: ElementRef;

  currentSlide = 0;
  isTransitionDisabled = false;
  dragOffset = 0;
  private autoPlayInterval: any;
  private resetTimer: any;
  private startX = 0;
  private startY = 0;
  private isDragging = false;

  private boundTouchStart = this.handleTouchStart.bind(this);
  private boundTouchMove = this.handleTouchMove.bind(this);
  private boundTouchEnd = this.handleTouchEnd.bind(this);
  private boundTouchCancel = this.handleTouchCancel.bind(this);
  private boundMouseDown = this.handleMouseDown.bind(this);
  private boundMouseMove = this.handleMouseMove.bind(this);
  private boundMouseUp = this.handleMouseUp.bind(this);

  constructor(private renderer: Renderer2) { }

  slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80',
      tag: 'PELUQUERÍA SOSTENIBLE',
      title: 'La Belleza Orgánica <br> en su Máxima <br> Esencia',
      description: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
      tag: 'BELLEZA CONSCIENTE',
      title: 'Tu Universo Natural <br> en un Solo <br> Espacio',
      description: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1920&q=80',
      tag: 'SALÓN LAS ROZAS',
      title: 'Experiencia Orgánica <br> de Alta <br> Gama',
      description: ''
    }
  ];

  ngOnInit() {
    // Clone first slide for infinite loop only if not already cloned
    if (this.slides.length > 0 && this.slides[this.slides.length - 1].image !== this.slides[0].image) {
      this.slides = [...this.slides, { ...this.slides[0] }];
    }
    this.startAutoPlay();
  }

  ngAfterViewInit() {
    const element = this.heroContainer.nativeElement;

    // Touch Listeners
    element.addEventListener('touchstart', this.boundTouchStart);
    element.addEventListener('touchmove', this.boundTouchMove, { passive: false });
    element.addEventListener('touchend', this.boundTouchEnd);
    element.addEventListener('touchcancel', this.boundTouchCancel);

    // Mouse Listeners
    element.addEventListener('mousedown', this.boundMouseDown);
    window.addEventListener('mousemove', this.boundMouseMove);
    window.addEventListener('mouseup', this.boundMouseUp);
  }

  ngOnDestroy() {
    this.stopAutoPlay();
    const element = this.heroContainer.nativeElement;

    element.removeEventListener('touchstart', this.boundTouchStart);
    element.removeEventListener('touchmove', this.boundTouchMove);
    element.removeEventListener('touchend', this.boundTouchEnd);
    element.removeEventListener('touchcancel', this.boundTouchCancel);

    element.removeEventListener('mousedown', this.boundMouseDown);
    window.removeEventListener('mousemove', this.boundMouseMove);
    window.removeEventListener('mouseup', this.boundMouseUp);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  getTransform() {
    if (this.isDragging) {
      return `translateX(calc(-${this.currentSlide * 100}% + ${this.dragOffset}px))`;
    }
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  nextSlide() {
    if (this.isTransitionDisabled && !this.isDragging) return;
    if (this.resetTimer) clearTimeout(this.resetTimer);

    this.currentSlide++;

    if (this.currentSlide === this.slides.length - 1) {
      // Reached the clone, we'll handle the reset after transition
      this.resetTimer = setTimeout(() => {
        this.isTransitionDisabled = true;
        this.currentSlide = 0;
        // Small delay to ensure the browser processes the transform update before re-enabling transition
        setTimeout(() => {
          this.isTransitionDisabled = false;
        }, 50);
      }, 400); // Matches transition duration
    }
  }

  prevSlide() {
    if (this.resetTimer) clearTimeout(this.resetTimer);

    if (this.currentSlide === 0) {
      // Jump to clone instantly
      this.isTransitionDisabled = true;
      this.currentSlide = this.slides.length - 1;

      // Force UI update then proceed to previous real slide
      setTimeout(() => {
        this.isTransitionDisabled = false;
        this.prevSlide();
      }, 50);
      return;
    }
    this.currentSlide--;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // --- Interactive Logic (Touch & Mouse) ---
  private startDragging(x: number, y: number) {
    this.stopAutoPlay();
    this.isDragging = true;
    this.startX = x;
    this.startY = y;
    this.dragOffset = 0;
  }

  handleTouchStart(event: TouchEvent) {
    this.startDragging(event.touches[0].clientX, event.touches[0].clientY);
  }

  handleTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;
    const diffX = currentX - this.startX;
    const diffY = currentY - this.startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (event.cancelable) event.preventDefault();
      this.dragOffset = diffX;
      this.isTransitionDisabled = true;
    }
  }

  handleTouchEnd(event: TouchEvent) {
    this.endDragging(event.changedTouches[0].clientX);
  }

  handleTouchCancel() {
    this.isDragging = false;
    this.startAutoPlay();
  }

  handleMouseDown(event: MouseEvent) {
    this.startDragging(event.clientX, event.clientY);
  }

  handleMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    this.dragOffset = event.clientX - this.startX;
    this.isTransitionDisabled = true;
  }

  handleMouseUp(event: MouseEvent) {
    if (!this.isDragging) return;
    this.endDragging(event.clientX);
  }

  private endDragging(finalX: number) {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.isTransitionDisabled = false;

    const difference = this.dragOffset;
    const swipeThreshold = 50;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference < 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }

    this.dragOffset = 0;
    this.startAutoPlay();
  }
}
