// Subtle nav shadow/border intensity on scroll
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    nav.style.borderBottomColor = window.scrollY > 8 ? 'var(--border)' : 'transparent';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Smooth-scroll for in-page anchor links (native CSS handles most,
// this just accounts for the sticky nav offset)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const navHeight = nav ? nav.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
