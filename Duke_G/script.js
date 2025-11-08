    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navContainer = document.getElementById('nav-container');
    
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navContainer.classList.toggle('active');
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });