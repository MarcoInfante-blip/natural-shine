import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Service {
  name: string;
  description: string;
  benefits: string[];
  image: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      name: 'Alisado Orgánico con Taninos',
      description: 'Alisado botánico basado en taninos vegetales que controla el encrespamiento y disciplina el cabello respetando su estructura natural. Ideal para quienes buscan un liso sano y duradero sin químicos agresivos.',
      benefits: ['Sin formol', 'Control del encrespamiento', 'Liso saludable'],
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80'
    },
    {
      name: 'Rituales Detox y Salud del Cuero Cabelludo',
      description: 'Protocolos específicos para limpiar en profundidad, equilibrar el cuero cabelludo y oxigenar la raíz. Ideales para cabellos sensibles, grasos o con picores.',
      benefits: ['Equilibrio del cuero cabelludo', 'Sensación de frescor', 'Prevención de caída'],
      image: 'https://i.pinimg.com/1200x/1d/32/72/1d3272accf287e56532bc196e91d7de9.jpg'
    },
    {
      name: 'Coloración Suave y Brillo Orgánico',
      description: 'Servicio de coloración con cosmética natural que respeta la fibra capilar y aporta brillo espejo. Perfecto para quienes buscan matizar, dar luz y cubrir canas sin agredir el cabello.',
      benefits: ['Cosmética natural', 'Brillo intenso', 'Respeto de la fibra'],
      image: 'https://i.pinimg.com/736x/e4/d0/9b/e4d09b0778a6e71e7fce5775db3bdee7.jpg'
    },
    {
      name: 'Taninoplastia y Alisados de Larga Duración',
      description: 'Tratamientos de alisado orgánico que controlan volumen y encrespamiento manteniendo el movimiento natural del cabello. Indicados para melenas que buscan orden y suavidad sin perder vida.',
      benefits: ['Larga duración', 'Movimiento natural', 'Suavidad extrema'],
      image: 'https://i.pinimg.com/1200x/a4/19/37/a419379c840da723fdc301552375e802.jpg'
    },
    {
      name: 'Bótox Capilar y Reconstrucción',
      description: 'Tratamiento profundo que repara, rellena y fortalece la fibra. Aporta cuerpo, brillo y elasticidad a cabellos debilitados, sensibilizados por coloraciones o herramientas de calor.',
      benefits: ['Reconstrucción', 'Fuerza y cuerpo', 'Brillo saludable'],
      image: 'https://images.unsplash.com/photo-1552046122-03184de85e08?w=800&q=80'
    },
    {
      name: 'Corte Terapéutico y Mantenimiento del Cabello',
      description: 'Cortes pensados para favorecer la forma natural de tu melena y mantenerla sana en el tiempo, siempre acompañados de rutinas en casa con cosmética natural adaptada a tu tipo de cabello.',
      benefits: ['Cuidado integral', 'Rutina personalizada', 'Salud capilar'],
      image: 'https://i.pinimg.com/736x/e9/a0/1b/e9a01b1cc2e28cc11090c348d2b21017.jpg'
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
