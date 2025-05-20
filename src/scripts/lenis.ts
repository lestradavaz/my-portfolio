import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis, { type LenisOptions } from 'lenis';

const options: LenisOptions = {
    duration: 1.2, // Duración de la interpolación
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    gestureOrientation: 'vertical',
    orientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
    infinite: false,
    lerp: 0.05,
    touchInertiaMultiplier: 1
};

const lenis = new Lenis(options);

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
