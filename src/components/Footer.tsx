import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-rvl-escuro py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
          <img src="/assets/Logo CRE Branco.svg" alt="Conferência Rios do Espírito Logo" loading="lazy" className="h-10 opacity-90" />
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <img src="/assets/Logo-Verbo.webp" alt="Verbo da Vida Logo" loading="lazy" className="h-16 opacity-90 object-contain" />
          <img src="/assets/selo_verbo.webp" alt="Selo Verbo" loading="lazy" className="h-10 opacity-90 object-contain" />
        </div>
        <p className="font-blauer text-sm text-white mb-6">18 e 20 de Junho de 2026 — Verbo da Vida Cabula, Salvador/BA</p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/riosdoespirito/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-rvl-laranja transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/@verbocabula"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-rvl-laranja transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
        </div>
        <p className="font-blauer text-xs text-white/60">© {new Date().getFullYear()} Conferência Rios do Espírito | Igreja Verbo do Cabula. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;


