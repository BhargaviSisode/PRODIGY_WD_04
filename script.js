// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});
