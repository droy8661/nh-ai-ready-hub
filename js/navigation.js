function normalizeLinkPath(linkPath) {
  if (!linkPath) {
    return '';
  }

  const withoutHash = linkPath.split('#')[0].split('?')[0];
  const normalized = withoutHash.replace(/^\.\//, '').replace(/^\//, '').replace(/\/$/, '');
  return normalized || 'index.html';
}

function initializeNavigation() {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const currentPage = normalizeLinkPath(window.location.pathname);

  if (siteNav) {
    siteNav.querySelectorAll('a[href]').forEach((link) => {
      const linkPath = normalizeLinkPath(link.getAttribute('href'));
      const isActive = linkPath === currentPage;

      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
      });
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeNavigation);
} else {
  initializeNavigation();
}
