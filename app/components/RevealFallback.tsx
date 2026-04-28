'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SELECTOR =
  'h1, h2, h3, h4, h5, h6, p, blockquote, .reveal, .featured-img, .img-settle';
const TEXT_TAGS = /^(H1|H2|H3|H4|H5|H6|P|BLOCKQUOTE)$/;

/**
 * Site-wide reveal: as elements enter the viewport, fade them up with a
 * line-by-line stagger inside their containing block.
 *
 * - If `data-delay="N"` is set on the element, that exact ms delay is used.
 * - Otherwise the delay is computed from the element's index among its
 *   text-element siblings inside the same parent (idx * 100ms).
 *
 * The visual is driven by the `.visible` / `.settled` CSS rules in
 * globals.css; this component is the only thing that adds those classes.
 *
 * Re-runs on client-side navigation so newly-mounted page elements get
 * observed too.
 */
export default function RevealFallback() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function getDelay(el: HTMLElement): number {
      // Explicit data-delay wins
      const explicit = el.dataset.delay;
      if (explicit) {
        const n = parseInt(explicit, 10);
        if (!Number.isNaN(n)) return n;
      }
      // Otherwise stagger by sibling index within the same parent block
      const parent = el.parentElement;
      if (!parent) return 0;
      let idx = 0;
      for (const sib of Array.from(parent.children)) {
        if (sib === el) break;
        if (sib instanceof HTMLElement) {
          if (TEXT_TAGS.test(sib.tagName) || sib.classList.contains('reveal')) {
            idx++;
          }
        }
      }
      // Cap to keep the stagger from snowballing on long lists
      return Math.min(idx, 6) * 100;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (
            el.classList.contains('visible') ||
            el.classList.contains('settled')
          ) {
            return;
          }
          const delay = getDelay(el);
          window.setTimeout(() => {
            const cls = el.classList.contains('img-settle') ? 'settled' : 'visible';
            el.classList.add(cls);
          }, delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.dataset.revealObserved === '1') return;
        if (el.classList.contains('visible') || el.classList.contains('settled')) return;
        el.dataset.revealObserved = '1';
        const rect = el.getBoundingClientRect();
        // Already past the viewport above (e.g. user landed mid-page) → reveal immediately
        if (rect.bottom < 0) {
          const cls = el.classList.contains('img-settle') ? 'settled' : 'visible';
          el.classList.add(cls);
          return;
        }
        observer.observe(el);
      });
    };

    // Run on next frame for normal renders
    const raf = requestAnimationFrame(observeAll);
    // Re-scan after a beat for client-navigated pages where children mount slightly after
    const t1 = window.setTimeout(observeAll, 200);
    const t2 = window.setTimeout(observeAll, 800);

    // Safety net: 2s after mount, force-reveal anything still hidden
    // that is at or above the bottom of viewport. Prevents stuck-invisible
    // text if the observer ever misses an element.
    const safetyNet = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (
          el.classList.contains('visible') ||
          el.classList.contains('settled')
        ) {
          return;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          const cls = el.classList.contains('img-settle') ? 'settled' : 'visible';
          el.classList.add(cls);
        }
      });
    }, 2000);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(safetyNet);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
