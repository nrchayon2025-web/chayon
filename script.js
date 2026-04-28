tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
            oswald: ['Oswald', 'sans-serif'],
          }
        }
      }
    }

// Accordion functionality
    function toggleAccordion(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.accordion-icon');
      const isOpen = content.classList.contains('open');

      // Close all other accordions in the same section
      const section = button.closest('section');
      const allContents = section.querySelectorAll('.accordion-content');
      const allIcons = section.querySelectorAll('.accordion-icon');

      allContents.forEach(c => c.classList.remove('open'));
      allIcons.forEach(i => i.classList.remove('rotated'));

      // Toggle current
      if (!isOpen) {
        content.classList.add('open');
        icon.classList.add('rotated');
      }
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-neutral-900', 'font-semibold');
        link.classList.add('text-neutral-500');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-neutral-900', 'font-semibold');
          link.classList.remove('text-neutral-500');
        }
      });
    });
