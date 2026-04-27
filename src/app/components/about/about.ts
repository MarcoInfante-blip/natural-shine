import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from '../testimonials/testimonials';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TestimonialsComponent],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  sections = {
    intro: {
      title: 'Tu salón orgánico <br> en Logroño',
      description: 'Bienvenidos a Natural Shine, tu espacio, donde cuidamos tu cabello con métodos naturales, sostenibles y personalizados. Con nuestra pasión por el cuidado capilar natural, nuestro compromiso es ofrecerte un espacio donde la belleza y la salud se encuentren. En Natural Shine, nos especializamos en coloración orgánica y tratamientos ecológicos, utilizando productos naturales que respetan tanto tu melena como el medio ambiente. Creemos firmemente que un cabello sano es la base de tu bienestar, por lo que apostamos por un enfoque totalmente libre de químicos agresivos.'
    },
    discover: {
      title: 'Descubre Natural Shine: Tu Peluquería Orgánica en Logroño',
      col1: 'En Natural Shine, combinamos las mejores técnicas de cuidado capilar natural con productos orgánicos de alta calidad, ofreciendo resultados saludables y duraderos. Nos enorgullece ofrecerte un servicio completamente respetuoso con tu cabello y con el entorno.',
      col2: 'Trabajamos con un diagnóstico previo donde analizamos el estado del cabello, hablamos sobre las rutinas en casa y expectativas. Con esa información trazamos un plan de trabajo personalizado para conseguir el cabello deseado y de bajo mantenimiento.'
    },
    statement1: {
      image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=1600&q=80',
      text: 'La esencia de lo natural'
    },
    coloration: {
      title: 'Coloración Orgánica',
      description: 'Tratamos el cabello como un organismo vivo. Nuestra coloración botánica respeta tu melena y el entorno, ofreciendo resultados vibrantes sin comprometer tu bienestar.'
    },
    pillars: {
      title: 'Nuestros Valores',
      items: [
        { title: 'Cosmética Natural', icon: 'fa-leaf' },
        { title: 'Bienestar del Planeta', icon: 'fa-earth-americas' },
        { title: 'Alisados Orgánicos', icon: 'fa-wand-magic-sparkles' },
        { title: 'Salud Capilar', icon: 'fa-heart-pulse' }
      ]
    }
  };

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
