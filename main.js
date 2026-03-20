document.addEventListener('DOMContentLoaded', function () {
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
        600: {
          perPage: 1,
        },
      },
    }).mount();

  if (document.querySelector('.testimonials-slider')) {

    testimonialSplide = new Splide('.testimonials-slider', {
      direction: 'ttb',
      autoHeight: true,
      height: '400px',
      padding: '2rem',
      focus: 'center',
      wheel: true,
      trimSpace: false,
      type: 'loop',
      perPage: 1,
      perMove: 1,
      pagination: true,
      arrows: true,
      autoplay: true,
      interval: 30000,
    });

    const count = document.querySelectorAll('.testimonials-slider .splide__list').length ?? 0
    // testimonials-pagination

    // testimonialSplide.on('move', function (newIndex, oldIndex, destIndex) {
    //   const slides = testimonialSplide.Components.Elements.slides;

    //   // Remove existing classes
    //   slides.forEach(slide => {
    //     slide.classList.remove('is-active', 'is-next', 'is-prev');
    //   });

    //   // Add classes before animation
    //   if (slides[newIndex]) {
    //     slides[newIndex].classList.add('is-active');
    //   }
    //   if (slides[newIndex + 1]) {
    //     slides[newIndex + 1].classList.add('is-next');
    //   }
    //   if (slides[newIndex - 1]) {
    //     slides[newIndex - 1].classList.add('is-prev');
    //   }
    // });
    testimonialSplide.mount({ CustomClassExtension });
  }
});