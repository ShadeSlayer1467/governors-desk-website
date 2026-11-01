// Keep native anchor fallbacks while scrolling without persistent URL fragments.
function clearFragment() {
  if (location.hash) {
    history.replaceState(history.state, '', location.pathname + location.search);
  }
}

document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.ctrlKey ||
      event.metaKey || event.shiftKey || event.altKey) return;

  const link = event.target.closest('a[href^="#"]');
  if (!link || (link.target && link.target !== '_self')) return;
  const target = document.getElementById(link.hash.slice(1));
  if (!target) return;

  event.preventDefault();
  clearFragment();
  // Keyboard navigation and the skip link must still move focus to their target.
  if (!target.hasAttribute('tabindex')) {
    target.setAttribute('tabindex', '-1');
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  }
  target.focus({ preventScroll: true });
  target.scrollIntoView({ block: 'start' });
});

// A previously shared fragment URL still opens its section, then becomes clean.
window.addEventListener('load', clearFragment);
window.addEventListener('hashchange', clearFragment);
