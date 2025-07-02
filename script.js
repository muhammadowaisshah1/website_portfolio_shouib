// Contact form dummy submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const response = document.getElementById('responseMsg');
  response.textContent = '📬 Message sent successfully! (Demo only)';
  response.style.color = '#00b894';

  setTimeout(() => {
    response.textContent = '';
    document.getElementById('contactForm').reset();
  }, 3000);
});

// Optional smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
