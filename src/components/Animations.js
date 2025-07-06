'use client';

import { useEffect } from 'react';

export default function Animations() {
    useEffect(() => {
        // Smooth scrolling
        const handleSmoothScroll = (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const elementsToAnimate = document.querySelectorAll('.project-card, .tech-item, .timeline-item, .stat-item');
        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });

        // Parallax effect for grid background
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            document.body.style.backgroundPosition = `0 ${rate}px`;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            document.removeEventListener('click', handleSmoothScroll);
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return null; // This component doesn't render anything
} 