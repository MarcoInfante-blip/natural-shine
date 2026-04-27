import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Testimonial {
    text: string;
    author: string;
    username: string;
}

@Component({
    selector: 'app-testimonials',
    imports: [CommonModule, ScrollRevealDirective],
    templateUrl: './testimonials.html',
    styleUrls: ['./testimonials.scss']
})
export class TestimonialsComponent {
    testimonials: Testimonial[] = [
        {
            text: 'La experiencia en Natural Shine es increíble. El trato es súper personalizado y los productos orgánicos dejan el pelo con un brillo espectacular.',
            author: 'María Garcia',
            username: '@mgarcia_hair'
        },
        {
            text: 'Por fin una peluquería que realmente se preocupa por la salud de mi cabello. El color me quedó súper natural y duradero.',
            author: 'Elena Rodríguez',
            username: '@elena_art'
        },
        {
            text: 'Me encanta la filosofía sostenible del salón. Además de salir guapísima, sé que estoy cuidando el planeta.',
            author: 'Lucía Ortiz',
            username: '@luciaortiz_style'
        },
        {
            text: 'El mejor corte que me han hecho en años. Entendieron perfectamente lo que buscaba desde el primer momento.',
            author: 'Sofia Mendez',
            username: '@sofia_mndz'
        }
    ];
}
