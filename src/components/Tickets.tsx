import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from './ui/button';
import confetti from 'canvas-confetti';

const Tickets = () => {
  const tickets = [
    { name: 'INGRESSO INDIVIDUAL', price: '120,00', features: ['+ R$ 8,16 taxa', 'Até 30/05 às 23:59'], highlight: true },
    { name: 'INGRESSO INFANTIL', price: '25,00', features: ['+ R$ 2,40 taxa', 'Até 01/05 às 23:59'], sub: '02 MESES A 4 ANOS' },
    { name: 'INGRESSO INFANTIL', price: '40,00', features: ['+ R$ 2,72 taxa', 'Até 01/05 às 23:59'], sub: '5 A 10 ANOS' }
  ];

  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [hasFinished, setHasFinished] = React.useState(false);

  React.useEffect(() => {
    // Set target date: June 18, 2026 at 19:00:00
    const targetDate = new Date('2026-06-18T19:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (!hasFinished) {
          setHasFinished(true);
          triggerConfetti();
        }
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [hasFinished]);

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <section id="ingressos" aria-labelledby="tickets-title" className="bg-rvl-creme-bg py-20 md:py-28 px-6 scroll-mt-0 md:scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-aeonik">Ingressos | CRE 26</p>
          <h2 id="tickets-title" className="text-rvl-escuro">
            Escolha como participar
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {tickets.map((ticket, i) => (
            <article key={i} className={`relative bg-rvl-escuro rounded-2xl shadow-2xl overflow-visible h-full flex flex-col ${ticket.highlight ? 'ring-2 ring-rvl-laranja/60' : ''}`}>
              <div className="px-5 pt-6 pb-4 text-center flex-1">
                <div className="inline-block border text-[10px] font-aeonik font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-rvl-laranja/20 border-rvl-laranja/40 text-rvl-laranja">
                  SEGUNDO LOTE
                </div>
                <h3 className="font-aeonik text-2xl text-rvl-creme tracking-wide leading-tight mb-1">{ticket.name}</h3>
                {ticket.sub && <p className="font-blauer text-rvl-creme/50 text-xs mb-2">{ticket.sub}</p>}
                <ul className={`font-blauer text-rvl-creme/60 text-xs mb-4 mt-3 space-y-1 ${ticket.name === 'KIT RVL' ? 'grid grid-cols-2 gap-x-3 gap-y-1' : ''}`}>
                  {ticket.features.map((f, j) => (
                    <li key={j} className="flex items-center justify-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-rvl-laranja/60 inline-block flex-shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex items-center px-0">
                <div className="absolute -left-3.5 w-7 h-7 rounded-full bg-[#F5F9FF] z-20"></div>
                <div className="w-full border-t-2 border-dashed border-white/15 mx-6"></div>
                <div className="absolute -right-3.5 w-7 h-7 rounded-full bg-[#F5F9FF] z-20"></div>
              </div>

              <div className="px-5 py-5 text-center">
                <p className="font-aeonik text-3xl text-rvl-creme tracking-wide mb-0.5">R${ticket.price}</p>
                <div className="mb-4"></div>
                <Button
                  href="https://tiketo.com.br/evento/5167"
                  className="!w-full !max-w-none !rounded-xl shadow-[0_4px_24px_rgba(245,130,58,0.35)]"
                  boxClassName="!p-1.5 !w-full !rounded-xl"
                  buttonClassName="!py-4 !px-6 !text-sm !font-bold uppercase tracking-wide !w-full !rounded-xl"
                >
                  QUERO GARANTIR MEU INGRESSO AGORA
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Countdown Section */}
        <div className="mt-16 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden bg-rvl-escuro">
          {/* Hero Gradient with Opacity */}
          <div className="hero-gradient absolute inset-0 opacity-60"></div>

          {/* Noise effect for consistency with Hero */}
          <div className="hero-noise absolute inset-0 opacity-10 pointer-events-none"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <CountdownItem value={timeLeft.days} label="DIAS" />
            <CountdownItem value={timeLeft.hours} label="HORAS" />
            <CountdownItem value={timeLeft.minutes} label="MINS" />
            <CountdownItem value={timeLeft.seconds} label="SEGS" />
          </div>

          {/* Subtle decoration to match the premium feel */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl md:text-6xl font-aeonik font-bold text-white tracking-tighter">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-[10px] md:text-xs font-blauer text-white/70 tracking-[0.2em] mt-2 font-bold">
      {label}
    </span>
  </div>
);

export default Tickets;


