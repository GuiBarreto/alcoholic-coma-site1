
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.color = '#39FF14';
    }
  });

  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '↑ Topo';
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '20px';
  backToTopBtn.style.right = '20px';
  backToTopBtn.style.padding = '10px 15px';
  backToTopBtn.style.backgroundColor = '#39FF14';
  backToTopBtn.style.color = '#fff';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.borderRadius = '5px';
  backToTopBtn.style.cursor = 'pointer';
  backToTopBtn.style.display = 'none';

  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

