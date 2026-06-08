import React from 'react';
import Button from './ui/button';

const Avaliacao: React.FC = () => {
  const handleAvaliacaoClick = () => {
    window.location.href = '/feedback';
  };

  return (
    <section id="avaliacao" className="relative py-20 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2BC79] via-[#F2BC79] to-[#F2BC79] z-0" style={{ opacity: 0.15 }}></div>
      
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl" style={{ backgroundColor: '#F27F22' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl" style={{ backgroundColor: '#090F19' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center">
          <p 
            className="font-aeonik font-semibold mb-4 text-lg"
            style={{
              color: '#F27F22',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.875rem'
            }}
          >
            Sua opinião importa
          </p>

          <h2 
            className="font-aeonik font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.2,
              color: '#090F19'
            }}
          >
            Nos ajude a melhorar
          </h2>

          <p 
            className="font-blauer text-lg md:text-xl mb-8"
            style={{
              color: '#090F19',
              lineHeight: 1.6,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Queremos que as próximas edições sejam ainda melhores! Sua opinião é fundamental para nós. Reserve um minuto para avaliar a estrutura, organização e a sua experiência geral na conferência. O formulário é rápido e pode ser anônimo.
          </p>

          <div className="flex justify-center">
            <Button
              onClick={handleAvaliacaoClick}
              className="w-full md:w-fit"
              boxClassName="gap-3"
              buttonClassName="text-base md:text-lg"
              fullWidth={false}
            >
              Avaliar a Conferência
            </Button>
          </div>
        </div>
      </div>

      <div 
        className="absolute top-10 right-10 w-20 h-20 border-2 rounded-3xl opacity-10 hidden md:block"
        style={{ borderColor: '#F27F22' }}
      ></div>
      <div 
        className="absolute bottom-10 left-10 w-16 h-16 border-2 rounded-2xl opacity-10 hidden md:block"
        style={{ borderColor: '#090F19' }}
      ></div>
    </section>
  );
};

export default Avaliacao;
