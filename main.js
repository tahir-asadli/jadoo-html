document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
  function CustomClassExtension(Splide, Components, options) {
    function applyClasses(newIndex) {
      const slides = Components.Elements.slides;

      slides.forEach((slide, i) => {
        slide.classList.remove('is-active', 'is-next', 'is-prev');

        if (i === newIndex) slide.classList.add('is-active');
        if (i === newIndex + 1) slide.classList.add('is-next');
        if (i === newIndex - 1) slide.classList.add('is-prev');
      });
    }

    return {
      mount() {
        // Apply on initial load
        applyClasses(Splide.index);

        // Apply BEFORE each move
        Splide.on('move', (newIndex) => {
          applyClasses(newIndex);
        });
      }
    };
  }

  // Partners
  document.querySelector('.partners-splide') &&
    new Splide('.partners-splide', {
      type: 'loop',
      perPage: 5,
      perMove: 1,
      gap: 20,
      pagination: false,
      arrows: false,
      autoplay: true,
      interval: 5000,
      breakpoints: {
        1600: {
          perPage: 5,
        },
        1400: {
          perPage: 4,
        },
        1200: {
          perPage: 3,
        },
        1024: {
          perPage: 2,
        },
      },
    }).mount();

  // Mobile menu
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  mobileMenuButton?.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('mobile-menu-open');
  });
  mobileMenuOverlay?.addEventListener('click', () => {
    document.querySelector('html').classList.remove('mobile-menu-open');
  });



});