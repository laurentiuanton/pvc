'use client';

import { Phone, MapPin, Clock, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      address: (form.elements.namedItem('address') as HTMLTextAreaElement).value,
      gdpr: (form.elements.namedItem('gdpr') as HTMLInputElement).checked,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Eroare la trimitere.');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Eroare la trimitere. Încercați din nou.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-zinc-900 border-t border-zinc-800 text-white relative">
      <div className="absolute inset-0 bg-[var(--color-primary)] opacity-5 blur-[100px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="bg-zinc-800/50 border border-zinc-700 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Direct Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight font-heading">
                Solicită acum o <span className="text-[var(--color-primary)]">ofertă</span> personalizată.
              </h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Completează formularul sau sună-ne direct. Un specialist VitraFrame va ajunge la tine în cel mai scurt timp pentru o evaluare detaliată și o ofertă personalizată, fără constrângeri.
              </p>

              <div className="space-y-6">
                <a href="tel:+40754025294" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors shadow-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading">Sună-ne acum</h4>
                    <p className="text-zinc-400 font-mono text-lg group-hover:text-white transition-colors">+40 754 025 294</p>
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
                    <h4 className="font-semibold font-heading">Locație</h4>
                    <p className="text-zinc-400">Str. Oltului, Nr. 8, Petroșani, Hunedoara, România</p>
                    <p className="text-zinc-400 text-sm mt-1">Zona de acoperire: localitatea Petroșani și județul Hunedoara</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Form */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white text-center font-heading">Trimite o solicitare</h3>
              
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2 font-heading">Solicitare trimisă cu succes!</h4>
                  <p className="text-zinc-400 mb-6">Vom reveni cu un răspuns în cel mai scurt timp.</p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="text-[var(--color-primary)] font-semibold hover:underline"
                  >
                    Trimite altă solicitare
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 pl-1">Numele tău complet</label>
                    <input type="text" id="name" name="name" required placeholder="Ex: Ion Popescu" className="w-full bg-zinc-950/50 border border-zinc-700/80 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all shadow-inner" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 pl-1">Număr de Telefon</label>
                    <input type="tel" id="phone" name="phone" required placeholder="07XX XXX XXX" className="w-full bg-zinc-950/50 border border-zinc-700/80 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all shadow-inner" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="service" className="block text-sm font-medium text-zinc-400 pl-1">Serviciul dorit</label>
                    <select id="service" name="service" className="w-full bg-zinc-950/50 border border-zinc-700/80 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all appearance-none cursor-pointer shadow-inner">
                      <option>Montaj Tâmplărie PVC / Aluminiu</option>
                      <option>Accesorii Tâmplărie</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="address" className="block text-sm font-medium text-zinc-400 pl-1">Adresă aproximativă (Opțional)</label>
                    <textarea id="address" name="address" rows={2} placeholder="Ex: Petroșani, Str. Păcii" className="w-full bg-zinc-950/50 border border-zinc-700/80 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all resize-none shadow-inner"></textarea>
                  </div>
                  
                  <div className="flex items-start gap-4 mt-6 pb-2 bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50">
                    <div className="flex items-center h-5 mt-0.5 shrink-0">
                      <input id="gdpr" name="gdpr" type="checkbox" required className="w-5 h-5 rounded border-zinc-600 bg-zinc-950 text-[var(--color-primary)] focus:ring-[var(--color-primary)] focus:ring-offset-zinc-900 accent-[var(--color-primary)] cursor-pointer transition-all" />
                    </div>
                    <label htmlFor="gdpr" className="text-sm text-zinc-400 leading-relaxed cursor-pointer select-none">
                      Sunt de acord cu prelucrarea datelor mele cu caracter personal furnizate mai sus, conform <a href="/politica-de-confidentialitate" className="text-white hover:text-[var(--color-primary)] underline decoration-zinc-600 hover:decoration-[var(--color-primary)] underline-offset-2 transition-colors">Politicii de confidențialitate (GDPR)</a>, pentru a fi contactat de echipa VitraFrame.
                    </label>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-950/50 border border-red-800/50 rounded-xl">
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <p className="text-red-300 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-primary)] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(30,58,138,0.3)] hover:shadow-[0_0_30px_rgba(30,58,138,0.5)] mt-8 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      'Solicită acum o ofertă'
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
