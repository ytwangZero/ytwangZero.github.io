/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const galleryTriggers = document.querySelectorAll('[data-gallery-trigger]');
    const lightbox = document.getElementById('interestLightbox');
    const lightboxImage = document.getElementById('interestLightboxImage');
    const lightboxCaption = document.getElementById('interestLightboxCaption');
    const lightboxCloseTargets = document.querySelectorAll('[data-gallery-close]');
    let lastFocusedTrigger = null;

    if (galleryTriggers.length && lightbox && lightboxImage && lightboxCaption) {
        const openLightbox = trigger => {
            const image = trigger.querySelector('img');

            if (!image) {
                return;
            }

            lastFocusedTrigger = trigger;
            lightboxImage.src = image.currentSrc || image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = image.alt;
            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.classList.add('lightbox-open');
        };

        const closeLightbox = () => {
            lightbox.classList.remove('is-open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('lightbox-open');

            if (lastFocusedTrigger) {
                lastFocusedTrigger.focus();
            }
        };

        galleryTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => openLightbox(trigger));
        });

        lightboxCloseTargets.forEach(target => {
            target.addEventListener('click', closeLightbox);
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
                closeLightbox();
            }
        });
    }

});
