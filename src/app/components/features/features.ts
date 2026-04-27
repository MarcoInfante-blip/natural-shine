import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  features: Feature[] = [
    {
      icon: 'fa-solid fa-seedling',
      title: 'Productos Certificados Naturales',
      description: 'Utilizamos exclusivamente cosméticos con certificación orgánica. Aceites de argán, coco, aloe vera y proteínas vegetales que nutren tu cabello desde la raíz.'
    },
    {
      icon: 'fa-solid fa-recycle',
      title: 'Compromiso con el Planeta',
      description: 'Ahorro de agua y energía, envases reciclables, reciclaje de cabello y productos biodegradables. Reducimos nuestro impacto ambiental en cada servicio.'
    },
    {
      icon: 'fa-solid fa-ban',
      title: 'Sin Formaldehído ni Tóxicos',
      description: 'Nuestros alisados no contienen formaldehído, parabenos ni sulfatos. Protegemos tu salud y la de nuestro equipo sin comprometer los resultados.'
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Efectos de 4 a 6 Meses',
      description: 'Los tratamientos naturales no solo embellecen tu cabello, lo fortalecen. Los resultados mejoran con cada visita y duran hasta 6 meses.'
    },
    {
      icon: 'fa-solid fa-user-graduate',
      title: 'Profesionales Especializados',
      description: 'Estudiantes del Ciclo Formativo de Peluquería y Cosmética Capilar, especializados en técnicas de cosmética natural y tratamientos sostenibles.'
    },
    {
      icon: 'fa-solid fa-heart',
      title: 'Información Clara y Honesta',
      description: 'Te explicamos exactamente qué productos usamos, por qué los elegimos y cómo cuidar tu cabello en casa de forma natural.'
    }
  ];

  ngOnInit() {
    this.setupScrollReveal();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private setupScrollReveal() {
    const options = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, options);

    // Observe scroll-reveal and fade-in elements
    setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal, .fade-in, .fade-in-up');
      elements.forEach(el => this.observer.observe(el));
    }, 100);
  }
}
