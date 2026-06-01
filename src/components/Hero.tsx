import React, { useEffect, useRef, useCallback } from 'react';

const Hero: React.FC = () => {
  const homeLeadRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLAnchorElement>(null);
  const photoByRef = useRef<HTMLDivElement>(null);

  const INITIAL_BORDER_RADIUS = 1.8;
  const INITIAL_BG_TOP = typeof window !== 'undefined' && window.innerWidth > 640 ? 6.5 : 5.1;
  const INITIAL_INLINE_SPACING = typeof window !== 'undefined' && window.innerWidth > 640 ? 2.0 : 1.5;
  const SCROLL_RANGE = 300;
  const PARALLAX_FACTOR = 0.15;

  const handleScroll = useCallback(() => {
    const container = homeLeadRef.current;
    if (!container) return;

    const scrollY = window.scrollY || window.pageYOffset;

    const progress = Math.min(1, Math.max(0, scrollY / SCROLL_RANGE));

    const borderRadius = INITIAL_BORDER_RADIUS * (1 - progress);
    const bgTop = INITIAL_BG_TOP * (1 - progress);
    const inlineSpacing = INITIAL_INLINE_SPACING * (1 - progress);
    const bgY = -(scrollY * PARALLAX_FACTOR);

    container.style.setProperty('--_bg-border-radius', `${borderRadius}rem`);
    container.style.setProperty('--_bg-top', `${bgTop}rem`);
    container.style.setProperty('--_bg-inline-spacing', `${inlineSpacing}rem`);
    container.style.setProperty('--_bg-y', `${bgY}px`);

    const fadeProgress = Math.min(1, scrollY / 150);
    const elementOpacity = 1 - fadeProgress;

    if (scrollerRef.current) {
      scrollerRef.current.style.opacity = String(elementOpacity);
    }
    if (photoByRef.current) {
      photoByRef.current.style.opacity = String(elementOpacity);
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const onScroll = () => {
      if (animationFrameId !== null) return;
      animationFrameId = requestAnimationFrame(() => {
        handleScroll();
        animationFrameId = null;
      });
    };

    handleScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [handleScroll]);

  return (
    <div
      ref={homeLeadRef}
      className="homeLead"
      style={{
        ['--_bg-border-radius' as string]: typeof window !== 'undefined' && window.innerWidth > 640 ? '1.125rem' : '1.8rem',
        ['--_bg-top' as string]: typeof window !== 'undefined' && window.innerWidth > 640 ? '6.5rem' : '5.1rem',
        ['--_bg-inline-spacing' as string]: typeof window !== 'undefined' && window.innerWidth > 640 ? '2rem' : '1.8rem',
        ['--_bg-y' as string]: '0rem',
      }}
    >
      <div className="homeLead-bg" style={{ opacity: 1 }}>
        <img
          src="/assets/lead-bg.jpg"
          alt=""
          fetchPriority="high"
        />
      </div>

      <section className="homeMv font-blauer flex items-center justify-center" style={{ ['--_photoby-y' as string]: '0rem' }}>
        <div className="hero-content relative z-[2] flex flex-col items-center justify-center w-full max-w-5xl mx-auto h-full px-4 sm:px-6 text-center">
          <img
            src="/assets/Logo  Horizontal Branca.svg"
            alt="Conferência Rios do Espírito Logo"
            width={490}
            height={180}
            className="w-[300px] sm:w-[306px] md:w-[380px] lg:w-[420px] xl:w-[490px] max-w-[90vw] max-h-[42vh] object-contain relative z-0"
            style={{ marginBottom: '3rem' }}
          />

          <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 xl:gap-14 relative z-10 w-full px-4 sm:px-6 text-center">

            <div className="flex flex-col text-[#fff2dc] drop-shadow-md mt-3 w-fit max-w-[95%] mx-auto text-center">
              <h1 className="text-center px-2 font-aeonik">
                <span className="font-quentin block leading-none text-[clamp(32px,9vw,60px)] text-white drop-shadow-[0_0_20px_rgba(242,127,34,0.3)] hover:drop-shadow-[0_0_25px_rgba(242,127,34,0.5)] transition-all duration-500 transform -rotate-1">
                  Seja bem-vindo!
                </span>
              </h1>
            </div>

          </div>
        </div>

        <div
          ref={photoByRef}
          className="homeMv-photoby"
          aria-hidden="true"
          style={{ opacity: 1 }}
        >
          <p style={{ fontSize: '0.6rem' }}>
            photography by Eichi Tano
          </p>
        </div>
      </section>

      <section className="homeMission font-blauer">
        <div className="homeMission-body">
          <p>
            Tudo o que vivemos juntos ainda está fluindo. Preparamos este espaço exclusivo para que você possa reviver os melhores momentos da nossa conferência e continuar sendo edificado pelo que recebemos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
