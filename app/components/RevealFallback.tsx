'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SELECTOR =
  'h1, h2, h3, h4, h5, h6, p, blockquote, .reveal, .featured-img, .img-settle';

/**
 * IntersectionObserver fallback for browsers that do NOT support
 * `animation-timeline: view()` (e.g. iOS Safari < 17.4).
 *
 * Modern browsers run the scroll-linked CSS animation defined in globals.css.
 * Older browsers fall back to this observer, which adds `.visible` (or
 * `.settled` for `.img-settle`) as elements enter the viewport — triggering
 * the transition-based fade-up defined inside the `@supports not (...)` CSS
 * block.
 *
 * Re-runs on client-side navigation so newly-mounted page elements get
 * observed too.
 */
export default function RevealFallback() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (CSS.supports?.('animation-timeline: view()')) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.classList.contains('visible') || el.classList.contains('settled')) return;
          const delay = parseInt(el.dataset.delay || '0', 10);
          window.setTimeout(() => {
            const cls = el.classList.contains('img-settle') ? 'settled' : 'visible';
            el.classList.add(cls);
          }, delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
