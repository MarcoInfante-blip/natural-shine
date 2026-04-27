import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CtaComponent } from '../cta/cta';
import { TestimonialsComponent } from '../testimonials/testimonials';

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, CtaComponent, TestimonialsComponent],
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
    contactForm: FormGroup;

    locations = [
        {
            city: 'La Rioja',
            address: 'Gran Vía del Rey Juan Carlos I, 12',
            phone: '+34 446 00 00 77',
            email: 'larioja@naturalshine.es'
        },
        {
            city: 'Logroño',
            address: 'Av. de la Paz, 45',
            phone: '+34 444 55 66 77',
            email: 'logrono@naturalshine.es'
        }
    ];

    socialGalleryItems = [
        { type: 'image', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80' },
        { type: 'image', image: 'https://i.pinimg.com/736x/44/5c/b1/445cb155ad8b1c95dcb214a0de74b8ed.jpg' },
        { type: 'image', image: 'https://i.pinimg.com/1200x/46/b5/b6/46b5b6f20c9a2256fbed9f86a7c38672.jpg' },
        { type: 'image', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
        { type: 'image', image: 'https://i.pinimg.com/736x/75/40/83/7540836f4593382f40ecb869c0864a61.jpg' },
        { type: 'image', image: 'https://i.pinimg.com/736x/6e/76/19/6e7619b3fbf300027ceec4a6438b3a61.jpg' },
        { type: 'image', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80' },
        { type: 'image', image: 'https://i.pinimg.com/1200x/8f/80/a6/8f80a6b1655bc26a88681ba653e14fe3.jpg' }
    ];

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    isSubmitted = false;

    onSubmit() {
        if (this.contactForm.valid) {
            console.log('Form Submitted', this.contactForm.value);

            // Show success message
            this.isSubmitted = true;
            this.contactForm.reset();

            // Hide message after 3 seconds
            setTimeout(() => {
                this.isSubmitted = false;
            }, 3000);
        }
    }
}
