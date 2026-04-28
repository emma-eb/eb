'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Triggers the one-shot fade-up animation for `.reveal` elements that are
 * already in the viewport at page load (above-the-fold).
 *
 * Below-the-fold elements are handled by the scroll-linked CSS animation
 * (`animation-timeline: view()` in globals.css), so this component only
 * adds the `.visible` class to elements the user can already see.
 *
 * Re-runs on client-side navigation via `usePathname`.
 */
export default function RevealOnLoad() {
  const pathname = usePathname();

  useEffect(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
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
