'use client';

import { CountUpStat } from './CountUpStat';

export function TrustSection() {
  const partners = [
    { name: 'TeraPlast', logo: '/teraplast.svg' },
    { name: 'ALUPROF', logo: null },
    { name: 'Profile de clasă A', logo: null }
  ];

  return (
    <section id="despre" className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Despre Noi - Top Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 mb-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase mb-3 text-left font-heading">Despre Noi</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-8 leading-tight font-heading">Pasiune pentru confort și eficiență</h3>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              VitraFrame reprezintă o experiență de peste 10 ani în prelucrarea și montajul tâmplăriei premium din PVC și Aluminiu. Echipa noastră este formată din profesioniști dedicați care înțeleg cât de important este căminul tău. Nu facem compromisuri atunci când vine vorba de calitatea finisajelor sau izolarea corectă fonică și termică.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              Scopul nostru este să livrăm proiecte la cheie, protejând căldura pe timpul iernii și oferind o barieră impenetrabilă contra zgomotelor orașului, investind constant în profile furnizate de lideri europeni.
            </p>
            
            {/* Quick Stats inline */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-200/60">
              <div>
                <p className="text-3xl font-extrabold text-[var(--color-primary)] font-heading">
                  <CountUpStat value={10} suffix="+" duration={2} />
                </p>
                <p className="text-sm text-zinc-500 font-medium">Ani de experiență</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[var(--color-primary)] font-heading">
                  <CountUpStat value={100} suffix="%" duration={2.5} />
                </p>
                <p className="text-sm text-zinc-500 font-medium">Clienți mulțumiți</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/50 group">
              <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src="/trust_sample_technical_logo.png" 
                alt="Echipă VitraFrame la montaj tâmplărie PVC" 
                className="w-full h-[300px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNEOEQ4RDgiLz48L3N2Zz4=')] opacity-50 z-0 hidden lg:block" />
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-24" />

        {/* Bottom Section - Warranty and Partners */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Warranty Badge */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-50 text-[var(--color-primary)] rounded-2xl shadow-sm border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 font-heading">Garanție 2 ani, durată minimă de utilizare 10 ani.</h3>
            <p className="text-zinc-600 leading-relaxed text-lg">
              Folosim exclusiv profile de top și feronerie premium. Calitatea lucrărilor noastre ne permite să oferim una dintre cele mai mari garanții de pe piață.
            </p>
          </div>

          {/* Partner Logos */}
          <div className="w-full md:w-2/3 bg-white p-10 rounded-3xl shadow-lg border border-zinc-100">
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest text-center mb-10 font-heading">
              Parteneri de încredere / Materiale Folosite
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center p-2 hover:scale-110 transition-transform h-20">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-12 w-auto object-contain filter brightness-0 hover:brightness-100 opacity-70 hover:opacity-100 transition-all"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const span = document.createElement('span');
                        span.innerText = partner.name;
                        span.className = "font-bold text-zinc-500 text-lg";
                        (e.target as HTMLImageElement).parentNode?.appendChild(span);
                      }}
                    />
                  ) : (
                    <span className="font-bold text-zinc-500 text-lg">{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
