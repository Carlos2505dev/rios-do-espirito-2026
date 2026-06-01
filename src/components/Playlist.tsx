import { Button } from './ui/button';

const Playlist = () => {
  return (
    <section id="playlist" className="py-20 md:py-28 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <p
              style={{
                color: 'var(--color-rvl-laranja)',
                fontFamily: 'var(--font-aeonik)',
                fontWeight: 500,
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.875rem',
              }}
            >
              Playlist Oficial
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: 1.2,
                marginBottom: '1rem',
                color: 'var(--color-rvl-escuro)',
              }}
            >
              O Som do Rio
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-blauer)',
                color: 'hsl(40 42% 90% / 0.8)',
                maxWidth: '32rem',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Os louvores que cantamos juntos continuam ecoando. Preparamos uma playlist com as músicas que marcaram os dias da nossa conferência para você continuar adorando em casa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 justify-center w-full">
              <Button
                href="https://open.spotify.com/playlist/YOUR_SPOTIFY_ID"
                className="shadow-[0_4px_24px_rgba(30,215,96,0.25)]"
                boxClassName="!p-1 !bg-gradient-to-r !from-[#1db954] !to-[#1ed760]"
                buttonClassName="!py-3 !px-6 !text-sm !font-bold uppercase tracking-wide flex items-center justify-center gap-2"
                fullWidth={false}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52.6 11.64 1.32.42.18.659.576.42.978l-.16.259zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.980-8.159-2.58-12.008-1.419-.479.12-1.02-.179-1.14-.66-.12-.48.179-1.02.66-1.14 4.268-1.271 9.494-.6 13.082 1.62.361.22.541.761.241 1.20l-.04.06zm.12-3.36C15.24 9.6 9.84 9.421 6.857 10.711c-.589.25-1.238-.061-1.488-.649-.25-.588.06-1.239.648-1.489 3.519-1.485 9.356-1.266 13.524 1.735.504.368.949.913.601 1.505-.348.592-1.1.745-1.604.376l.12-.037z"/>
                </svg>
                Spotify
              </Button>

              <Button
                href="https://www.youtube.com/playlist?list=YOUR_YOUTUBE_ID"
                className="shadow-[0_4px_24px_rgba(255,0,0,0.25)]"
                boxClassName="!p-1 !bg-gradient-to-r !from-[#ff0000] !to-[#ff3333]"
                buttonClassName="!py-3 !px-6 !text-sm !font-bold uppercase tracking-wide flex items-center justify-center gap-2"
                fullWidth={false}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </Button>
            </div>

            {/* Additional note */}
            <p
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: 'hsl(40 42% 90% / 0.6)',
                fontSize: '0.875rem',
                marginTop: '1.5rem',
              }}
            >
              Clique para acessar a playlist em sua plataforma favorita
            </p>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
