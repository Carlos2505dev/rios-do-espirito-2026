import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Sushi Ruy Barbosa', logo: '/images/partners/logo-sushi-ruy-barbosa.png', url: 'https://www.instagram.com/sushiruybarbosa/' },
    { name: 'Blum', logo: '/images/partners/logo-blum.PNG', url: 'https://www.instagram.com/blum.cookies/' },
    { name: 'Rusty Burger', logo: '/images/partners/logo-rusty-burger.PNG', url: 'https://www.instagram.com/rustyburgeroficial/' },
    { name: 'Zenith', logo: '/images/partners/logo-zenith.png', url: 'https://www.instagram.com/zenith_belem/' },
    { name: 'Bermax', logo: '/images/partners/bermax-logo.png', url: 'https://www.instagram.com/bermaxculture/' },
    { name: 'Track & Field', logo: '/images/partners/track-and-field-logo.png', url: 'https://www.instagram.com/trackfieldbelem/' }
  ];

  return (
    <section className="bg-rvl-creme-bg py-16 px-6 border-t border-rvl-escuro/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-rvl-escuro mb-10">Patrocinadores</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partners.map((partner, i) => (
            <a key={i} href={partner.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <img src={partner.logo} alt={partner.name} loading="lazy" className="w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 h-12 md:h-16 max-w-[120px] md:max-w-[160px] filter brightness-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


