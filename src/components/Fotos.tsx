import { Images } from 'lucide-react';
import { Button } from './ui/button';

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
          width: 12rem !important; /* w-48 */
          height: 10rem !important; /* h-40 */
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
            width: 16rem !important; /* md:w-64 */
            height: 14rem !important; /* md:h-56 */
          }
        }
      `}</style>

      <section id="fotos">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center">
            <p style={{ color: '#B5440A', fontFamily: 'var(--font-aeonik)', fontWeight: 500, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Galeria</p>
            <h2 style={{ fontFamily: 'var(--font-aeonik)', fontWeight: 700, marginBottom: '1rem' }}>
              Memórias do Rio
            </h2>
            <p style={{ fontFamily: 'var(--font-blauer)', color: 'hsl(0 0% 10% / 0.7)', maxWidth: '42rem', fontSize: '1.125rem', marginBottom: '2rem' }}>
              Clique no botão abaixo para acessar o álbum completo com todos os momentos da conferência.
            </p>

            <Button
              href="#"
              className="shadow-[0_4px_24px_rgba(245,130,58,0.35)] flex items-center justify-center gap-2"
              boxClassName="!p-1.5"
              buttonClassName="!py-3 !px-8 !text-sm !font-bold uppercase tracking-wide flex items-center gap-2"
              fullWidth={false}
            >
              <Images size={18} />
              Acessar Todas as Fotos
            </Button>
          </div>
        </div>

        {/* Carrossel de imagens */}
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
