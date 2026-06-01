import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa';

const Recomendacoes = () => {
  const photos = [
    { src: '/assets/2024/IMG_0768.webp', alt: 'Foto do evento Rios do Espírito: Batismo nas águas', caption: 'Batismo nas águas', likes: 3493, comments: 278 },
    { src: '/assets/2024/IMG_0161.webp', alt: 'Momento de adoração no evento Rios do Espírito', caption: 'Noite de adoração', likes: 2847, comments: 195 },
    { src: '/assets/2024/IMG_0067.webp', alt: 'Culto de celebração no evento Rios do Espírito', caption: 'Deus está se movendo', likes: 4120, comments: 321 }
  ];

  return (
    <section id="recomendacoes" className="relative py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#021F59] via-[#0D2E70] to-[#021F59] z-0"></div>
      <div className="absolute inset-0 opacity-10 mix-blend-overlay z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wMSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center text-white mb-12">
          <p style={{ color: 'var(--color-rvl-laranja)', fontFamily: 'var(--font-aeonik)', fontWeight: 500, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Recomendações</p>
          <h2 className="text-4xl md:text-5xl font-aeonik font-bold mb-6">
            Espalhe as Águas
          </h2>
          <p className="text-xl md:text-2xl font-blauer text-white/80 max-w-2xl mx-auto mb-8">
            A sua voz multiplica o que Deus fez! Você não pode compartilhar os links daqui, <strong className="text-white">mas pode (e deve!)</strong> postar as suas fotos.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h3 className="text-3xl font-aeonik font-bold text-white mb-3">
                Publique seus registros
              </h3>
              <p className="font-blauer text-white/80 mb-6">
                Use a hashtag <strong className="text-white">#CRE2026</strong> e marque nossos perfis para continuarmos juntos neste mover.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white font-aeonik">
                  #CRE2026
                </span>
              </div>
              <a 
                href="https://www.instagram.com/riosdoespirito/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Compartilhar foto no Instagram: abrir perfil @riosdoespirito"
                className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-[#f5823a] to-[#e06e25] hover:from-[#e06e25] hover:to-[#c75c1b] text-white font-aeonik font-bold uppercase tracking-wide rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,130,58,0.6)] transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-400/50"
              >
                <FaInstagram size={20} />
                Compartilhar minha foto
              </a>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {photos.map((photo, idx) => (
                <figure 
                  key={idx}
                  className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl"
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <p className="text-white font-aeonik font-semibold text-lg">{photo.caption}</p>
                    <p className="text-white/90 text-sm font-blauer mb-2">Rios do Espírito 2024</p>
                    <div className="flex gap-4 text-white/90">
                      <span className="flex items-center gap-1 text-sm" aria-label={`${photo.likes} curtidas`}>
                        <FaHeart size={16} />
                        <span>{photo.likes}</span>
                      </span>
                      <span className="flex items-center gap-1 text-sm" aria-label={`${photo.comments} comentários`}>
                        <FaComment size={16} />
                        <span>{photo.comments}</span>
                      </span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-blauer text-white/70">
              Siga nossos perfis para mais conteúdos:
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.instagram.com/verbodavidacabula/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Seguir @verbodavidacabula no Instagram"
                className="flex items-center justify-center gap-2 py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-aeonik uppercase text-sm tracking-wide text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <FaInstagram size={16} />
                @verbodavidacabula
              </a>
              <a 
                href="https://www.instagram.com/riosdoespirito/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Seguir @riosdoespirito no Instagram"
                className="flex items-center justify-center gap-2 py-3 px-6 bg-rvl-laranja/20 hover:bg-rvl-laranja/30 border border-rvl-laranja/40 rounded-xl font-aeonik uppercase text-sm tracking-wide text-rvl-laranja transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50"
              >
                <FaInstagram size={16} />
                @riosdoespirito
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomendacoes;
