import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.scss']
})
export class BookingComponent implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;
  bookingForm!: FormGroup;
  submitted = false;
  showSuccess = false;

  services = [
    { value: 'keratina', label: 'Queratina Vegetal (€120 - 3h)' },
    { value: 'taninoplastia', label: 'Taninoplastia (€140 - 3.5h)' },
    { value: 'tratamiento', label: 'Tratamiento Intensivo (€80 - 2h)' },
    { value: 'consulta', label: 'Consulta Gratuita (30 min)' }
  ];

  reservationSummary = {
    name: '',
    service: '',
    date: '',
    time: ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.setupScrollReveal();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initForm() {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9,}$/)]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      allergies: [''],
      comments: [''],
      privacyPolicy: [false, Validators.requiredTrue],
      promotions: [false]
    });
  }

  get f() {
    return this.bookingForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.bookingForm.invalid) {
      return;
    }

    const formValues = this.bookingForm.value;
    const serviceLabel = this.services.find(s => s.value === formValues.service)?.label || '';

    // Formatear fecha manualmente para asegurar visibilidad
    const dateObj = new Date(formValues.date);
    const formattedDate = dateObj.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    this.reservationSummary = {
      name: formValues.name,
      service: serviceLabel,
      date: formattedDate,
      time: formValues.time
    };

    this.showSuccess = true;
  }

  closeSuccessModal() {
    this.showSuccess = false;
    this.resetForm();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  resetForm() {
    this.submitted = false;
    this.bookingForm.reset();
  }

  private setupScrollReveal() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, options);

    setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(el => this.observer.observe(el));
    }, 100);
  }
}
