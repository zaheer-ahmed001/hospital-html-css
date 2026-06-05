// ========== MOBILE NAV ==========
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');

  if (hamburger && navUl) {
    hamburger.addEventListener('click', () => {
      navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
      navUl.style.flexDirection = 'column';
      navUl.style.position = 'absolute';
      navUl.style.top = '70px';
      navUl.style.left = '0';
      navUl.style.right = '0';
      navUl.style.background = 'white';
      navUl.style.padding = '20px 24px';
      navUl.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
      navUl.style.zIndex = '998';
    });
  }

  // Active nav link highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ========== DOCTOR FILTER (doctors.html) ==========
  const filterBtns = document.querySelectorAll('.filter-btn');
  const doctorCards = document.querySelectorAll('.doctor-card[data-dept]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      doctorCards.forEach(card => {
        if (filter === 'all' || card.dataset.dept === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ========== APPOINTMENT FORM ==========
  const apptForm = document.getElementById('appointmentForm');
  if (apptForm) {
    apptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('successMsg');
      if (successMsg) {
        successMsg.style.display = 'block';
        apptForm.reset();
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 5000);
      }
    });
  }

  // ========== CONTACT FORM ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('contactSuccess');
      if (successMsg) {
        successMsg.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 5000);
      }
    });
  }

  // ========== SCROLL REVEAL ==========
  const revealEls = document.querySelectorAll('.service-card, .doctor-card, .why-card, .contact-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});