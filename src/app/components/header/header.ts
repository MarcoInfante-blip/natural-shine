import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isHidden = false;
  isNosotrosPage = false;
  isServiciosPage = false;
  isServiciosOpen = false;
  private lastScrollTop = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.lastScrollTop = window.pageYOffset;

    // Detect if we're on the Nosotros or Servicios pages
    this.router.events.subscribe(() => {
      this.isNosotrosPage = this.router.url.includes('/nosotros');
      this.isServiciosPage = this.router.url.includes('/servicios');
    });

    // Initial check
    this.isNosotrosPage = this.router.url.includes('/nosotros');
    this.isServiciosPage = this.router.url.includes('/servicios');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Scrolled threshold for background change
    this.isScrolled = currentScrollTop > 100;

    // Hiding/Showing logic
    if (currentScrollTop > this.lastScrollTop && currentScrollTop > 200) {
      // Scrolling down
      this.isHidden = true;
    } else {
      // Scrolling up
      this.isHidden = false;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleServicios(event: Event) {
    if (window.innerWidth <= 992) {
      event.preventDefault();
      event.stopPropagation();
      this.isServiciosOpen = !this.isServiciosOpen;
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMenu();
    }
  }
}
