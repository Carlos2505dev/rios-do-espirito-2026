import { Button } from './ui/button';

const GrupoOficial = () => {
  return (
    <section
      id="grupo-oficial"
      className="py-14 px-6"
      style={{
        background: 'hsl(16 79% 22%)',
        borderTop: '1px solid hsl(16 79% 30% / 0.5)',
        borderBottom: '1px solid hsl(16 79% 30% / 0.5)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="text-center md:text-left">
          <p
            className="font-aeonik font-medium uppercase tracking-widest text-xs mb-2"
            style={{ color: 'hsl(16 79% 54%)' }}
          >
            Comunidade
          </p>

          <h2
            className="font-aeonik font-bold uppercase tracking-tight leading-tight"
            style={{
              color: 'hsl(40 42% 90%)',
              fontSize: 'clamp(1.2rem, 4.2vw, 2.6rem)',
            }}
          >
            Entre no Grupo Oficial
          </h2>

          <p
            className="font-blauer text-sm mt-2 max-w-md leading-relaxed"
            style={{ color: 'hsl(40 42% 90% / 0.75)' }}
          >
            Fique por dentro de tudo que acontece na conferência: avisos e conteúdos exclusivos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
          <Button
            href="https://chat.whatsapp.com/LDddFi3efouLjrRVt3RDrg?s=sw&p=i&ilr=2"
            className="!w-auto !max-w-none !rounded-full shadow-[0_0_30px_rgba(245,130,58,0.25)]"
            boxClassName="!p-1.5 !rounded-full"
            buttonClassName="!px-8 !py-3.5 !text-sm !font-bold uppercase tracking-wide !rounded-full"
            fullWidth={false}
          >
            Entrar no Grupo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GrupoOficial;
