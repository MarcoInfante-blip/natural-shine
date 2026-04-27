import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cta',
    imports: [CommonModule],
    templateUrl: './cta.html',
    styleUrls: ['./cta.scss']
})
export class CtaComponent {
    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            // Small offset if needed, but smooth scroll should be fine
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
