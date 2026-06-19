import { Images } from 'lucide-react';

const Fotos = () => {
  const fotos = [
    '/assets/2024/IMG_0067.webp',
    '/assets/2024/IMG_0161.webp',
    '/assets/2025/1-IMG_1384.webp',
    '/assets/2025/2-IMG_9861.webp',
    '/assets/2025/3-IMG_8189.webp',
    '/assets/2024/IMG_1058.webp',
    '/assets/2024/IMG_0067.webp',
    '/assets/2024/IMG_0161.webp',
    '/assets/2025/1-IMG_1384.webp',
    '/assets/2025/2-IMG_9861.webp',
  ];

  const fotosParte2 = [
    '/assets/2025/3-IMG_8189.webp',
    '/assets/2024/IMG_1058.webp',
    '/assets/2024/IMG_0067.webp',
    '/assets/2024/IMG_0161.webp',
    '/assets/2025/1-IMG_1384.webp',
    '/assets/2025/2-IMG_9861.webp',
    '/assets/2025/3-IMG_8189.webp',
    '/assets/2024/IMG_1058.webp',
    '/assets/2024/IMG_0067.webp',
    '/assets/2024/IMG_0161.webp',
  ];

  return (
    <>
      <style>{`
        @keyframes marquee-horizontal-alt {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        @keyframes marquee-horizontal {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .track-horizontal-alt,
        .track-horizontal {
          position: absolute !important;
          white-space: nowrap !important;
          will-change: transform !important;
        }
        .track-horizontal-alt {
          animation: marquee-horizontal-alt 40s linear infinite !important;
        }
        .track-horizontal {
          animation: marquee-horizontal 40s linear infinite !important;
        }
        .track-horizontal-alt:hover,
        .track-horizontal:hover {
          animation-play-state: paused !important;
        }
        .fotos-gallery-item {
          flex: 0 0 auto !important;
          width: 12rem !important;
          height: 10rem !important;
          border-radius: 0.5rem !important;
          overflow: hidden !important;
          background-size: cover !important;
          background-position: center !important;
          transition: opacity 0.3s ease !important;
        }
        .fotos-gallery-item:hover {
          opacity: 0.8 !important;
        }
        @media (min-width: 768px) {
          .fotos-gallery-item {
            width: 16rem !important;
            height: 14rem !important;
          }
        }
      `}</style>

      <section id="fotos">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center">
            <p style={{ color: '#B5440A', fontFamily: 'var(--font-aeonik)', fontWeight: 500, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Galeria</p>
            <h2 style={{ fontFamily: 'var(--font-aeonik)', fontWeight: 700, marginBottom: '1rem' }}>
              Memórias CRE'26
            </h2>
            <p style={{ fontFamily: 'var(--font-blauer)', color: 'hsl(0 0% 10% / 0.7)', maxWidth: '42rem', fontSize: '1.125rem', marginBottom: '2rem' }}>
              Reviva os melhores momentos da nossa conferência. Clique no botão abaixo para acessar o álbum completo, baixar seus registros e relembrar o que vivemos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mt-4 text-left">
              {[
                {
                  href: "https://drive.google.com/drive/folders/14vHqkV9IlmuVTG0H4Rb1dr7SJp_wvuKV",
                  label: "DIA 01 · NOITE",
                  title: "QUINTA-FEIRA",
                  subtitle: "Noite de abertura — 18 de Junho"
                },
                {
                  href: "https://drive.google.com/drive/folders/1zCRkmVcbJel_Tqy4NrYHW3MYW_7fTAe1",
                  label: "DIA 02 · NOITE",
                  title: "SEXTA-FEIRA",
                  subtitle: "19 de Junho"
                },
                {
                  href: "#",
                  label: "DIA 03 · MANHÃ",
                  title: "SÁBADO À TARDE",
                  subtitle: "20 de Junho"
                },
                {
                  href: "#",
                  label: "DIA 03 · NOITE",
                  title: "SÁBADO À NOITE",
                  subtitle: "Noite de Encerramento — 20 de Junho"
                }
              ].map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 bg-[#222222] hover:bg-[#2a2a2a] border border-white/10 hover:border-rvl-laranja/30 rounded-2xl p-6 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-rvl-laranja/10 group-hover:bg-rvl-laranja/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Images className="w-5 h-5 text-rvl-laranja" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-rvl-laranja font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                      <span>{card.label.split(' · ')[0]}</span>
                      {card.label.includes(' · ') && (
                        <span className="w-1 h-1 rounded-full bg-rvl-laranja opacity-80 mt-[1px]"></span>
                      )}
                      <span>{card.label.split(' · ')[1]}</span>
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-aeonik)' }} className="text-rvl-creme text-xl tracking-wide leading-tight font-bold uppercase">
                      {card.title}
                    </h3>
                    <p className="text-rvl-creme/50 text-xs mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-rvl-creme/30 group-hover:text-rvl-laranja group-hover:translate-x-1 transition-all flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <div style={{ position: 'relative', height: '10rem', marginBottom: '1rem' }} className="md:h-56">
            <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
              <div className="track-horizontal-alt flex gap-4">
                {fotos.map((src, index) => (
                  <a
                    key={index}
                    href="#"
                    className="fotos-gallery-item"
                    style={{
                      backgroundImage: `url(${src})`,
                    }}
                    aria-label={`Foto ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', height: '10rem' }} className="md:h-56">
            <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
              <div className="track-horizontal flex gap-4">
                {fotosParte2.map((src, index) => (
                  <a
                    key={`parte2-${index}`}
                    href="#"
                    className="fotos-gallery-item"
                    style={{
                      backgroundImage: `url(${src})`,
                    }}
                    aria-label={`Foto ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fotos;
