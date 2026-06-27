function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path || 'index.html';
}

function initializeNavigation() {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (siteNav) {
    const currentPage = getCurrentPage();

    siteNav.querySelectorAll('a[href]').forEach((link) => {
      const linkPath = link.getAttribute('href');
      if (!linkPath) {
        return;
      }

      const normalizedLinkPath = linkPath.split('/').pop() || 'index.html';
      if (normalizedLinkPath === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeNavigation);
} else {
  initializeNavigation();
}
