import { Share2 } from 'lucide-react';
import { Button } from './ui/button';
import ElectricBorder from './ElectricBorder';

const Ministracoes = () => {
  const ministracoes = [
    {
      title: "O Fluir do Espírito",
      speaker: "Pr. Emerson Miranda",
      photo: "/assets/Ministros/emerson.webp",
      photoPosition: "center 40%"
    },
    {
      title: "Rios de Cura",
      speaker: "Vânia Nascimento",
      photo: "/assets/Ministros/vania.webp",
      photoPosition: "center 30%"
    },
    {
      title: "Profundidade",
      speaker: "Davi Silva",
      photo: "/assets/Ministros/davi.webp",
      photoPosition: "center 15%"
    },
    {
      title: "Águas Vivas",
      speaker: "Cynthia Miranda",
      photo: "/assets/Ministros/cynthia.webp",
      photoPosition: "center 25%"
    },
    {
      title: "Fogo do Avivamento",
      speaker: "Pr. Gian Santos",
      photo: "/assets/Ministros/gian.webp",
      photoPosition: "center 55%"
    }
  ];

  return (
    <section id="ministracoes">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <p style={{ color: 'var(--color-rvl-laranja)', fontFamily: 'var(--font-aeonik)', fontWeight: 500, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Ministrações</p>
          <h2 style={{ fontFamily: 'var(--font-aeonik)', fontWeight: 700, marginBottom: '1rem' }}>
            Águas que Transformam
          </h2>
          <p style={{ fontFamily: 'var(--font-blauer)', color: 'hsl(40 42% 90% / 0.7)', maxWidth: '42rem', margin: '0 auto 1.5rem', fontSize: '1.125rem' }}>
            Palavras que marcaram a nossa conferência. <strong>Clique, assista e ouça</strong> novamente as mensagens completas.
          </p>
          <div style={{ 
            maxWidth: '42rem', 
            margin: '0 auto', 
            padding: '1rem 1.25rem', 
            backgroundColor: 'rgba(245, 130, 58, 0.1)', 
            border: '2px solid var(--color-rvl-laranja)',
            borderRadius: '0.5rem',
            fontFamily: 'var(--font-aeonik)',
            color: 'var(--color-rvl-laranja)',
            fontWeight: 600,
            fontSize: '0.95rem',
            textAlign: 'center'
          }}>
            ⚠️ Atenção: Estes links são de uso exclusivo dos participantes. Pedimos que não repasse ou compartilhe os vídeos externamente.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
          {ministracoes.map((item, index) => (
            <ElectricBorder
              key={index}
              color="#ffffff"
              speed={0.8}
              chaos={0.1}
              borderRadius={16}
            >
              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="flip-card-front">
                    <div className="photo-container">
                      <img src={item.photo} alt={item.speaker} className="minister-photo" style={{ objectPosition: item.photoPosition }} />
                    </div>
                    <div className="front-content">
                      <h3 style={{ fontFamily: 'var(--font-aeonik)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h3>
                      <p style={{ color: 'var(--color-rvl-laranja)', fontFamily: 'var(--font-aeonik)', fontWeight: 500, fontSize: '0.875rem' }}>{item.speaker}</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="back-content">
                      <h3 style={{ fontFamily: 'var(--font-aeonik)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-rvl-laranja)' }}>{item.title}</h3>
                      <Button
                        href="#"
                        className="shadow-[0_4px_24px_rgba(245,130,58,0.35)]"
                        boxClassName="!p-1"
                        buttonClassName="!py-2 !px-4 !text-xs !font-bold uppercase tracking-wide"
                        fullWidth={false}
                      >
                        Assistir Ministração
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>

        <div className="cta-card" style={{ textAlign: 'center', width: '100%', maxWidth: '64rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-aeonik)', fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.75rem' }}>O que Deus fez em você?</h3>
          <p style={{ fontFamily: 'var(--font-blauer)', color: 'hsl(40 42% 90% / 0.8)', marginBottom: '2rem', maxWidth: '32rem' }}>
            Queremos ouvir como a conferência impactou a sua jornada. Compartilhe com a nossa equipe o que aconteceu com você; o seu testemunho edifica a nossa igreja.
          </p>
          <Button
            href="#"
            className="shadow-[0_4px_24px_rgba(245,130,58,0.35)] flex items-center justify-center gap-2"
            boxClassName="!p-1.5"
            buttonClassName="!py-3 !px-8 !text-sm !font-bold uppercase tracking-wide flex items-center gap-2"
            fullWidth={false}
          >
            <Share2 size={18} />
            Enviar meu Testemunho
          </Button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .flip-card-container {
          perspective: 1000px;
          height: 400px;
        }

        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card-container:hover .flip-card,
        .flip-card-container:active .flip-card {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
          background: linear-gradient(135deg, hsl(40 20% 12%), hsl(40 20% 8%));
        }

        .flip-card-front {
          display: flex;
          flex-direction: column;
        }

        .photo-container {
          flex: 1;
          overflow: hidden;
        }

        .minister-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          transform: scale(1.15);
          transition: transform 0.5s ease;
        }

        .flip-card-container:hover .minister-photo,
        .flip-card-container:active .minister-photo {
          transform: scale(1.25);
        }

        .front-content {
          padding: 1.25rem;
          background: linear-gradient(to top, hsl(40 20% 8%), transparent);
        }

        .flip-card-back {
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, hsl(40 20% 12%), hsl(40 20% 8%));
          border: 1px solid hsl(40 20% 15%);
        }

        .back-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}} />
    </section>
  );
};

export default Ministracoes;
