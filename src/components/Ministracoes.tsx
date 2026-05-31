import { Share2 } from 'lucide-react';
import { Button } from './ui/button';
import ElectricBorder from './ElectricBorder';

const Ministracoes = () => {
  const ministracoes = [
    {
      title: "O Fluir do Espírito",
      speaker: "Pr. Emerson",
      description: "Uma mensagem profunda sobre como permitir que o Espírito Santo guie cada passo.",
      photo: "/assets/Ministros/emerson.jpg",
      photoPosition: "center 40%"
    },
    {
      title: "Rios de Cura",
      speaker: "Pra. Vânia",
      description: "Testemunhos e palavras de restauração física e emocional.",
      photo: "/assets/Ministros/vania.jpg",
      photoPosition: "center 30%"
    },
    {
      title: "Profundidade",
      speaker: "Pr. Davi",
      description: "Um chamado para mergulhar mais fundo nas águas do avivamento.",
      photo: "/assets/Ministros/davi.jpeg",
      photoPosition: "center 15%"
    },
    {
      title: "Águas Vivas",
      speaker: "Pra. Cynthia",
      description: "O transbordar da glória de Deus em nossas vidas e famílias.",
      photo: "/assets/Ministros/cynthia.jpg",
      photoPosition: "center 25%"
    },
    {
      title: "Fogo do Avivamento",
      speaker: "Pr. Gian",
      description: "Uma palavra sobre o fogo do Espírito Santo em nossas vidas.",
      photo: "/assets/Ministros/gian.jpeg",
      photoPosition: "center 55%"
    }
  ];

  return (
    <section id="ministracoes">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <p style={{ color: 'var(--color-rvl-laranja)', fontFamily: 'var(--font-aeonik)', fontWeight: 500, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Conteúdos</p>
          <h2 style={{ fontFamily: 'var(--font-aeonik)', fontWeight: 700, marginBottom: '1rem' }}>
            Águas que Transformam — Ministrações
          </h2>
          <p style={{ fontFamily: 'var(--font-blauer)', color: 'hsl(40 42% 90% / 0.7)', maxWidth: '42rem', margin: '0 auto', fontSize: '1.125rem' }}>
            Palavras que marcaram nossa conferência. Assista, ouça e compartilhe.
          </p>
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
                      <p style={{ fontFamily: 'var(--font-blauer)', color: 'hsl(40 42% 90% / 0.9)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{item.description}</p>
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
            Queremos ouvir o que aconteceu durante a conferência. Seu testemunho pode edificar muitas vidas.
          </p>
          <Button
            href="#"
            className="shadow-[0_4px_24px_rgba(245,130,58,0.35)] flex items-center justify-center gap-2"
            boxClassName="!p-1.5"
            buttonClassName="!py-3 !px-8 !text-sm !font-bold uppercase tracking-wide flex items-center gap-2"
            fullWidth={false}
          >
            <Share2 size={18} />
            Compartilhar Testemunho
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
