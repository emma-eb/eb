'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Triggers the one-shot fade-up animation for text elements that are already
 * in the viewport at page load (above-the-fold).
 *
 * Below-the-fold elements are handled by the scroll-linked CSS animation
 * (`animation-timeline: view()` in globals.css). This component only adds
 * the `.visible` class to elements the user can already see, so the hero
 * animates on load instead of staying frozen at its end-state.
 *
 * Re-runs on client-side navigation via `usePathname`.
 */
const SELECTOR =
  'h1, h2, h3, h4, h5, h6, p, blockquote, .reveal, .featured-img, .img-settle';

export default function RevealOnLoad() {
  const pathname = usePathname();

  useEffect(() => {
    // Only fire the one-shot animation when the user is actually at the top.
    // Browsers (Safari especially) restore the previous scroll position on
    // reload — without this guard, every element in the restored viewport
    // gets `.visible` and skips its scroll-linked animation.
    if (window.scrollY > 50) return;

    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.classList.contains('visible')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const delay = parseInt(el.dataset.delay || '0', 10);
          setTimeout(() => el.classList.add('visible'), delay);
        }
      });
    });
  }, [pathname]);

  return null;
}
