import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioImage {
    url: string;
    title: string;
}

@Component({
    selector: 'app-portfolio',
    imports: [CommonModule],
    templateUrl: './portfolio.html',
    styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
    title: string = 'Inspírate con algunos de nuestros trabajos';
    images: PortfolioImage[] = [
        { url: 'https://i.pinimg.com/736x/63/af/34/63af3486058bbe080c3afbedb2d6046b.jpg', title: 'Mechas de Autor' },
        { url: 'https://i.pinimg.com/1200x/d6/03/21/d603211b9810eca735d9511a936f33cb.jpg', title: 'Corte y Textura' },
        { url: 'https://i.pinimg.com/736x/d6/89/e1/d689e188441d6e292e6897ee62d000be.jpg', title: 'Color Orgánico' },
        { url: 'https://i.pinimg.com/736x/5b/63/b4/5b63b4a6d4a68c974da729aed2e9635b.jpg', title: 'Tratamiento Brillo' },
        { url: 'https://i.pinimg.com/736x/b1/2b/c6/b12bc6452631955380e54ddf417db23d.jpg', title: 'Estilo Salvia' },
        { url: 'https://i.pinimg.com/736x/c0/79/cf/c079cf0cb06cffe8c6e7d177f62a1318.jpg', title: 'Peinado Especial' },
        { url: 'https://i.pinimg.com/736x/ef/95/c5/ef95c57623b234f1b22d27f9ef9acdd2.jpg', title: 'Peinado Especial' },
        { url: 'https://i.pinimg.com/736x/3f/1d/00/3f1d005b381aea72a39b6c1130d8a6b0.jpg', title: 'Peinado Especial' },
    ];

    currentIndex = 0;
    autoPlayInterval: any;
    visibleItems = 3;
    displayImages: PortfolioImage[] = [];
    isTransitioning = true;

    ngOnInit() {
        this.setupDisplayImages();
        this.updateVisibleItems();
        this.startAutoPlay();
        window.addEventListener('resize', () => {
            this.updateVisibleItems();
            this.setupDisplayImages();
        });
    }

    ngOnDestroy() {
        this.stopAutoPlay();
        window.removeEventListener('resize', () => this.updateVisibleItems());
    }

    setupDisplayImages() {
        // Clone images to create an infinite loop effect
        // Current approach: [Last visible items] + [Original Images] + [First visible items]
        const firstSet = this.images.slice(0, this.visibleItems);
        const lastSet = this.images.slice(-this.visibleItems);
        this.displayImages = [...lastSet, ...this.images, ...firstSet];
        this.currentIndex = this.visibleItems; // Start at the first real image
    }

    updateVisibleItems() {
        if (window.innerWidth < 768) {
            this.visibleItems = 1;
        } else if (window.innerWidth < 1024) {
            this.visibleItems = 2;
        } else {
            this.visibleItems = 3;
        }
    }

    next() {
        if (!this.isTransitioning) return;
        this.currentIndex++;
        this.checkBoundaries();
    }

    prev() {
        if (!this.isTransitioning) return;
        this.currentIndex--;
        this.checkBoundaries();
    }

    checkBoundaries() {
        const totalDisplay = this.displayImages.length;

        // If we reached the end (cloned items)
        if (this.currentIndex >= totalDisplay - this.visibleItems) {
            setTimeout(() => {
                this.isTransitioning = false;
                this.currentIndex = this.visibleItems;
                setTimeout(() => this.isTransitioning = true, 50);
            }, 600); // Match SCSS transition time
        }

        // If we reached the beginning (cloned items)
        if (this.currentIndex < this.visibleItems) {
            setTimeout(() => {
                this.isTransitioning = false;
                this.currentIndex = totalDisplay - (this.visibleItems * 2);
                setTimeout(() => this.isTransitioning = true, 50);
            }, 600);
        }
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    getTransform() {
        const itemWidth = 100 / this.visibleItems;
        return `translateX(-${this.currentIndex * itemWidth}%)`;
    }
}
