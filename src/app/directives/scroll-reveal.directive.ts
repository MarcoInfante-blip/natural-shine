import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
    @Input() delay: number = 0;
    private observer: IntersectionObserver | undefined;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        this.el.nativeElement.classList.add('revealed');
                    }, this.delay);
                    this.observer?.unobserve(this.el.nativeElement);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }
}
