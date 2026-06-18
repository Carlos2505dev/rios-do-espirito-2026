import { useEffect, useRef } from 'react';
import { FaInstagram } from 'react-icons/fa';

const CAROUSEL_ITEMS = [
  {
    src: '/assets/Patrocinadores/Patrocinadores.webp',
    links: [
      // Linha de Cima
      { top: '0%', left: '0%', width: '20%', height: '50%', link: 'https://instagram.com/laisreisassessoria' },
      { top: '0%', left: '20%', width: '20%', height: '50%', link: 'https://instagram.com/conectadosvv_' },
      { top: '0%', left: '40%', width: '20%', height: '50%' },
      { top: '0%', left: '60%', width: '20%', height: '50%', link: 'https://instagram.com/rebecacriacestas' },
      { top: '0%', left: '80%', width: '20%', height: '50%', link: 'https://instagram.com/meumana.devocional' },
      // Linha de Baixo
      { top: '50%', left: '0%', width: '20%', height: '50%', link: 'https://instagram.com/luminavittae' },
      { top: '50%', left: '20%', width: '20%', height: '50%', link: 'https://instagram.com/mmcontabilidade' },
      { top: '50%', left: '40%', width: '20%', height: '50%', link: 'https://instagram.com/ofertaodemoveis' },
      { top: '50%', left: '60%', width: '20%', height: '50%', link: 'https://instagram.com/prisciladiiasnails' },
      { top: '50%', left: '80%', width: '20%', height: '50%', link: 'https://instagram.com/deliciasdaneneu/' },
    ]
  },
  {
    src: '/assets/Patrocinadores/Patrocinadores_1.webp',
    links: [
      // Linha de Cima
      { top: '0%', left: '0%', width: '20%', height: '50%', link: 'https://instagram.com/dolceamore_confeitaria' },
      { top: '0%', left: '20%', width: '20%', height: '50%', link: 'https://instagram.com/camilacerqueira.arq' },
      { top: '0%', left: '40%', width: '20%', height: '50%', link: 'https://instagram.com/multhy.com.br' },
      { top: '0%', left: '60%', width: '20%', height: '50%', link: 'https://instagram.com/maxwebergrupo' },
      { top: '0%', left: '80%', width: '20%', height: '50%', link: 'https://instagram.com/academiainfinitylife' },
      // Linha de Baixo
      { top: '50%', left: '0%', width: '20%', height: '50%', link: 'https://instagram.com/enjoybrasil.app' },
      { top: '50%', left: '20%', width: '20%', height: '50%' },
      { top: '50%', left: '40%', width: '20%', height: '50%', link: 'https://instagram.com/inovetecch' },
      { top: '50%', left: '60%', width: '20%', height: '50%', link: 'https://instagram.com/dr.albernaz' },
      { top: '50%', left: '80%', width: '20%', height: '50%', link: 'https://instagram.com/paozinhodelicia_da_vilma' },
    ]
  },
  {
    src: '/assets/Patrocinadores/Patrocinadores_2.webp',
    links: [
      // Linha de Cima
      { top: '0%', left: '0%', width: '33.33%', height: '50%', link: 'https://instagram.com/fotografiasvictormonteiro' },
      { top: '0%', left: '33.33%', width: '33.33%', height: '50%', link: 'https://instagram.com/ilmacostaballet' },
      { top: '0%', left: '66.66%', width: '33.33%', height: '50%', link: 'https://instagram.com/studionaiararocha' },
      // Linha de Baixo
      { top: '50%', left: '0%', width: '33.33%', height: '50%', link: 'https://instagram.com/fersanestetica' },
      { top: '50%', left: '33.33%', width: '33.33%', height: '50%', link: 'https://instagram.com/gsburgeroficial' },
      { top: '50%', left: '66.66%', width: '33.33%', height: '50%', link: 'https://instagram.com/artinbox_vidracaria' },
    ]
  }
];

const SUBTITLE_WORDS = ['Conheça', 'nossos', 'parceiros.'] as const;

const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleSpansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
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
      <div className="partners-spacer" />

      <div className="pw6-section">
        <div className="pw6-text">
          <h2 className="pw6-heading">Conecte-se</h2>
        </div>
      </div>

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

      <div className="partners-spacer" />

      <section className="carrossel-infinito" aria-label="Logomarcas dos parceiros">
        <div className="carrossel-track">
          {Array.from({ length: 4 }).map((_, repeatIndex) => (
            CAROUSEL_ITEMS.map((item, itemIndex) => (
              <div key={`logo-a-${repeatIndex}-${itemIndex}`} className="image-wrapper">
                <img
                  decoding="async"
                  src={item.src}
                  alt="Logos Patrocinadores"
                />
                {item.links.map((sponsor, index) => (
                  sponsor.link ? (
                    <a
                      key={`link-a-${repeatIndex}-${itemIndex}-${index}`}
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sponsor-overlay-link"
                      style={{
                        top: sponsor.top,
                        left: sponsor.left,
                        width: sponsor.width,
                        height: sponsor.height,
                      }}
                      aria-label="Acessar instagram do patrocinador"
                    />
                  ) : null
                ))}
              </div>
            ))
          ))}

          {Array.from({ length: 4 }).map((_, repeatIndex) => (
            CAROUSEL_ITEMS.map((item, itemIndex) => (
              <div key={`logo-b-${repeatIndex}-${itemIndex}`} className="image-wrapper" aria-hidden="true">
                <img
                  decoding="async"
                  src={item.src}
                  alt="Logos Patrocinadores"
                />
                {item.links.map((sponsor, index) => (
                  sponsor.link ? (
                    <a
                      key={`link-b-${repeatIndex}-${itemIndex}-${index}`}
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sponsor-overlay-link"
                      style={{
                        top: sponsor.top,
                        left: sponsor.left,
                        width: sponsor.width,
                        height: sponsor.height,
                      }}
                      tabIndex={-1}
                    />
                  ) : null
                ))}
              </div>
            ))
          ))}
        </div>
      </section>

      {/* Aviso de redirecionamento ao Instagram */}
      <p className="partners-instagram-hint">
        <FaInstagram size={20} aria-hidden="true" />
        Toque em <span style={{ fontWeight: 600 }}>qualquer parceiro</span> para conhecê-lo no Instagram
      </p>

      <div className="partners-spacer" />

      <style>{PARTNERS_STYLES}</style>
    </section>
  );
};

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
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

const PARTNERS_STYLES = `
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

  .carrossel-infinito {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    background: transparent;
  }

  .carrossel-track {
    display: flex;
    padding: 0;
    flex-wrap: nowrap;
    width: max-content;
    gap: 0.5rem;
    align-items: center;
    animation: scroll-left 25s linear infinite;
    will-change: transform;
  }

  .carrossel-track:hover {
    animation-play-state: paused;
  }

  .image-wrapper {
    position: relative;
    flex-shrink: 0;
    display: flex;
    height: 300px;
  }

  .image-wrapper img {
    height: 100%;
    width: auto;
    object-fit: contain;
    user-select: none;
    display: block;
  }

  .sponsor-overlay-link {
    position: absolute;
    display: block;
    z-index: 10;
  }

  .sponsor-overlay-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 1024px) {
    .image-wrapper {
      height: 240px;
    }
  }

  @media (max-width: 640px) {
    .image-wrapper {
      height: 180px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carrossel-track {
      animation: none;
      transform: none;
    }
  }

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

  .partners-instagram-hint {
    width: 100%;
    max-width: 1200px;
    margin-top: 2.5rem;
    font-family: var(--font-blauer), sans-serif;
    font-size: clamp(0.85rem, 2vw, 1.05rem);
    color: rgba(242, 188, 121, 0.8);
    letter-spacing: 0.02em;
    text-align: center;
    line-height: 1.6;
    user-select: none;
  }

  .partners-instagram-hint svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.4rem;
    flex-shrink: 0;
    opacity: 0.7;
  }
`;

export default Partners;
