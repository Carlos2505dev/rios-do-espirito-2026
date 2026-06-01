import { useEffect, useRef } from 'react';

/**
 * Partners Section — "Conheça nossos braços"
 *
 * Exact replica of the Dunamis Movement "bracos" section.
 * Contains:
 *  1. Animated "CONECTE-SE" title (letter-by-letter reveal via GSAP/ScrollTrigger)
 *  2. "Conheça nossos braços." subtitle with blur-unblur animation
 *  3. Infinite horizontal logo carousel
 *  4. "Saiba mais!" CTA button
 */

/* ── Logo image URL (duplicated for seamless infinite scroll) ── */
const LOGO_IMAGE_URL =
  'https://dunamismovement.com/wp-content/uploads/2025/08/logos-off.png';

/* ── Subtitle words for the blur-in animation ── */
const SUBTITLE_WORDS = ['Conheça', 'nossos', 'patrocinadores.'] as const;

const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleSpansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    /**
     * Subtitle blur-unblur animation only.
     */
    const loadGsapAndAnimate = async () => {
      const gsapAlreadyLoaded = typeof (window as any).gsap !== 'undefined';

      if (!gsapAlreadyLoaded) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
      }

      /* eslint-disable @typescript-eslint/no-explicit-any */
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      /* eslint-enable @typescript-eslint/no-explicit-any */

      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      /* ── Subtitle blur-unblur animation ── */
      const validSpans = subtitleSpansRef.current.filter(Boolean);
      if (validSpans.length > 0) {
        gsap.to(validSpans, {
          scrollTrigger: {
            trigger: '.texto-bracos',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          filter: 'blur(0px)',
          transform: 'translateY(0px)',
          duration: 1,
          ease: 'power2.out',
          stagger: 0.1,
        });
      }
    };

    loadGsapAndAnimate();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="patrocinadores"
      className="partners-section"
    >
      {/* ── Spacer ── */}
      <div className="partners-spacer" />

      {/* ── "CONECTE-SE" animated title ── */}
      <div className="pw6-section">
        <div className="pw6-text">
          <h2 className="pw6-heading">Conecte-se</h2>
        </div>
      </div>

      {/* ── "Conheça nossos braços." subtitle ── */}
      <p className="texto-bracos">
        {SUBTITLE_WORDS.map((word, index) => (
          <span
            key={index}
            ref={(element) => { subtitleSpansRef.current[index] = element; }}
            style={{
              display: 'inline-block',
              transform: 'translateY(10px)',
              filter: 'blur(8px)',
              opacity: 0,
              willChange: 'opacity, filter, transform',
            }}
          >
            {word}
            {index < SUBTITLE_WORDS.length - 1 ? '\u00A0' : ''}
          </span>
        ))}
      </p>

      {/* ── Spacer ── */}
      <div className="partners-spacer" />

      {/* ── Infinite logo carousel ── */}
      <section className="carrossel-infinito" aria-label="Logos dos braços do Dunamis">
        <div className="carrossel-track">
          {/* Block A — original images */}
          {Array.from({ length: 4 }).map((_, index) => (
            <img
              key={`logo-a-${index}`}
              decoding="async"
              src={LOGO_IMAGE_URL}
              alt="Logos"
            />
          ))}

          {/* Block B — duplicated for seamless loop */}
          {Array.from({ length: 4 }).map((_, index) => (
            <img
              key={`logo-b-${index}`}
              decoding="async"
              src={LOGO_IMAGE_URL}
              alt="Logos"
              aria-hidden="true"
            />
          ))}
        </div>
      </section>

      {/* ── Spacer ── */}
      <div className="partners-spacer" />

      {/* ── Spacer ── */}
      <div className="partners-spacer" />

      {/* ── Scoped styles (exact replica of the Dunamis source) ── */}
      <style>{PARTNERS_STYLES}</style>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────
 * Helper: dynamically load an external script
 * ────────────────────────────────────────────────────────── */
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    /* Skip if already loaded */
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

/* ─────────────────────────────────────────────────────────
 * Scoped CSS — exact replica of the Dunamis HTML source
 * ────────────────────────────────────────────────────────── */
const PARTNERS_STYLES = `
  /* ── Section wrapper ── */
  .partners-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #1a1a1a;
    padding: 2rem;
    overflow: hidden;
    box-sizing: border-box;
  }

  .partners-spacer {
    height: 40px;
  }

  /* ── "CONECTE-SE" title ── */

  .pw6-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    background: transparent;
    padding: 10px;
    box-sizing: border-box;
  }

  .pw6-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .pw6-heading {
    font-size: clamp(1.5rem, 5vw, 3rem);
    color: #F2BC79;
    text-align: center;
    font-weight: 700;
    line-height: 1;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-family: var(--font-aeonik), sans-serif;
  }

  .pw6-letras {
    font-size: 0;
    letter-spacing: -0.05em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pw6-letras span {
    font-size: 3.36rem;
    display: inline-block;
    transform: translateY(100%) scale(0.85);
    opacity: 0;
    will-change: transform, opacity;
    margin-right: -0.1rem;
  }



  /* ── "Conheça nossos braços." subtitle ── */
  .texto-bracos {
    font-family: var(--font-blauer), sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: #F2BC79;
    text-align: center;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
  }

  .texto-bracos span {
    display: inline-block;
    opacity: 0;
    filter: blur(8px);
    transform: translateY(10px);
    will-change: opacity, filter, transform;
  }

  /* ── Infinite logo carousel ── */
  .carrossel-infinito {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background: transparent;
  }

  .carrossel-track {
    display: flex;
    padding: 0 2rem;
    flex-wrap: nowrap;
    width: max-content;
    gap: 0.9rem;
    animation: scroll-left 150s linear infinite;
    will-change: transform;
  }

  .carrossel-track img {
    height: 300px;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
    flex-shrink: 0;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .carrossel-track img {
      height: 240px;
    }
  }

  @media (max-width: 640px) {
    .carrossel-track img {
      height: 180px;
    }
  }

  /* ── Accessibility: reduce motion ── */
  @media (prefers-reduced-motion: reduce) {
    .carrossel-track {
      animation: none;
      transform: none;
    }
  }

  /* ── CTA Button ── */
  .partners-cta-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .partners-cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    background: #ffe9e2;
    color: #1a1a1a;
    font-family: 'Aeonik', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 999px;
    text-decoration: none;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .partners-cta-button:hover {
    background: #ffd6c7;
    transform: scale(1.05);
  }

  .partners-cta-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .partners-cta-icon {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .partners-cta-button:hover .partners-cta-icon {
    transform: translateX(4px);
  }

  .partners-cta-text {
    white-space: nowrap;
  }
`;

export default Partners;
