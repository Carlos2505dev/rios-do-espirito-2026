import React, { useEffect, useRef } from 'react';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const homeLeadHeightRef = useRef(0);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const homeLead = document.querySelector('.homeLead') as HTMLElement;
    if (homeLead) {
      homeLeadHeightRef.current = homeLead.offsetHeight;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const headerElement = headerRef.current;
      const logoElement = logoRef.current;
      if (!headerElement) return;

      const trigger = homeLeadHeightRef.current - 50;
      const isPastHomeLead = scrollY >= trigger;

      if (isPastHomeLead) {
        headerElement.style.setProperty('--_bg-color', '#F5F9FF');
        headerElement.style.setProperty('--_text-color', '#090F19');
        if (logoElement) {
          logoElement.style.opacity = '1';
          logoElement.style.visibility = 'visible';
        }
      } else {
        headerElement.style.setProperty('--_bg-color', 'transparent');
        if (logoElement) {
          logoElement.style.opacity = '0';
          logoElement.style.visibility = 'hidden';
        }

        const progress = Math.min(1, scrollY / 150);
        const r = Math.round(15 + (255 - 15) * progress);
        const g = Math.round(35 + (255 - 35) * progress);
        const b = Math.round(80 + (255 - 80) * progress);

        headerElement.style.setProperty('--_text-color', `rgb(${r}, ${g}, ${b})`);
      }
    };

    const throttledScroll = () => {
      if (scrollTimeoutRef.current) return;
      
      handleScroll();
      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 16);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="header inline-spacing font-blauer"
      style={{
        ['--_bg-color' as any]: 'transparent',
        ['--_text-color' as any]: '#0f2350',
        transition: 'background-color 0.3s ease',
      }}
    >
      <h1
        ref={logoRef}
        className="header-logo font-aeonik"
        style={{
          opacity: 0,
          visibility: 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
        }}
      >
        <a href="https://wota.co.jp/" className="header-logo-link">
          <img
            src="/assets/Logo CRE Branco.svg"
            alt="CRE Logo"
            className="header-logo-image"
            style={{ filter: 'invert(1)' }}
          />
        </a>
      </h1>
    </header>
  );
};
