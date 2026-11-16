document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Lightbox for non-linked viewable images
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  const lightboxImg = document.createElement('img');
  overlay.appendChild(lightboxImg);
  document.body.appendChild(overlay);

  document.querySelectorAll('.media-item.viewable, .floating-still.viewable').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      lightboxImg.src = img.currentSrc || img.src;
      if (item.classList.contains('rotated-90-wrap')) {
        lightboxImg.classList.add('rotated-90');
      } else {
        lightboxImg.classList.remove('rotated-90');
      }
      overlay.classList.add('open');
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('open');
    lightboxImg.src = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      lightboxImg.src = '';
    }
  });
});
