'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-zinc-900 border-t border-zinc-800 text-white relative">
      <div className="absolute inset-0 bg-[var(--color-primary)] opacity-5 blur-[100px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="bg-zinc-800/50 border border-zinc-700 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Direct Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight font-heading">
                Cere o <span className="text-[var(--color-primary)]">măsurătoare</span> gratuită.
              </h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Completează formularul sau sună-ne direct. Un specialist VitraFrame va ajunge la tine în cel mai scurt timp pentru o evaluare detaliată și o ofertă personalizată, fără constrângeri.
              </p>

              <div className="space-y-6">
                <a href="tel:0254545454" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors shadow-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading">Sună-ne acum</h4>
                    <p className="text-zinc-400 font-mono text-lg group-hover:text-white transition-colors">0254 545 454</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-zinc-300">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[var(--color-primary)] shrink-0 shadow-lg">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading">Program de lucru</h4>
                    <p className="text-zinc-400">Luni - Vineri: 08:00 - 16:00</p>
                    <p className="text-zinc-400">Sâmbătă: Închis</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-zinc-300">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[var(--color-primary)] shrink-0 shadow-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading">Zona de acoperire</h4>
                    <p className="text-zinc-400">localitatea Petroșani și județul Hunedoara</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Form */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white text-center font-heading">Trimite o solicitare</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 pl-1">Numele tău complet</label>
                  <input type="text" id="name" placeholder="Ex: Ion Popescu" className="w-full bg-zinc-950/50 border border-zinc-700/80 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all shadow-inner" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 pl-1">Număr de Telefon</label>
                  <input type="tel" id="phone" placeholder="07XX XXX XXX" className="w-full bg-zinc-950/50 border border-zinc-700/80 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all shadow-inner" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-400 pl-1">Serviciul dorit</label>
                  <select id="service" className="w-full bg-zinc-950/50 border border-zinc-700/80 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all appearance-none cursor-pointer shadow-inner">
                    <option>Montaj Tâmplărie PVC / Aluminiu</option>
                    <option>Plase Insecte</option>
                    <option>Rulouri Exterioare</option>
                    <option>Reparații / Mentenanță</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="address" className="block text-sm font-medium text-zinc-400 pl-1">Adresă aproximativă (Opțional)</label>
                  <textarea id="address" rows={2} placeholder="Ex: Petroșani, Str. Păcii" className="w-full bg-zinc-950/50 border border-zinc-700/80 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all resize-none shadow-inner"></textarea>
                </div>
                
                <div className="flex items-start gap-4 mt-6 pb-2 bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50">
                  <div className="flex items-center h-5 mt-0.5 shrink-0">
                    <input id="gdpr" type="checkbox" required className="w-5 h-5 rounded border-zinc-600 bg-zinc-950 text-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-offset-zinc-900 accent-[var(--color-primary)] cursor-pointer transition-all" />
                  </div>
                  <label htmlFor="gdpr" className="text-sm text-zinc-400 leading-relaxed cursor-pointer select-none">
                    Sunt de acord cu prelucrarea datelor mele cu caracter personal furnizate mai sus, conform <a href="/politica-de-confidentialitate" className="text-white hover:text-[var(--color-primary)] underline decoration-zinc-600 hover:decoration-[var(--color-primary)] underline-offset-2 transition-colors">Politicii de confidențialitate (GDPR)</a>, pentru a fi contactat de echipa VitraFrame.
                  </label>
                </div>

                <button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(30,58,138,0.3)] hover:shadow-[0_0_30px_rgba(30,58,138,0.5)] mt-8 transform active:scale-[0.98]">
                  Solicită Ofertă și Măsurătoare
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
