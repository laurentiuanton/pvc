import { Star } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: 'Andrei Popescu',
      location: 'Petroșani',
      text: 'O lucrare excelentă! Au venit la timp, au montat curat, iar diferența de temperatură din living se simte deja. Zgomotul de la bulevard a dispărut complet.',
      rating: 5,
    },
    {
      name: 'Maria Ionescu',
      location: 'Hunedoara',
      text: 'Băieții au fost super profesioniști. Am închis o terasă cu rulouri exterioare și profile Salamander. Finisaje impecabile și au lăsat curat după ei. Recomand!',
      rating: 5,
    },
    {
      name: 'Cristian Vasile',
      location: 'Deva',
      text: 'Echipa a lucrat rapid și au respectat devizul inițial. Raportul calitate-preț este cel mai bun pe care l-am găsit după mult research. Ferestrele sunt de top.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 overflow-hidden relative">
      {/* Decorative dot grid background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase mb-3 font-heading">Păreri clienți</h2>
          <h3 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-6 font-heading">Ce spun clienții noștri</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Sute de familii ne-au ales pentru confortul casei lor. Satisfacția lor este cea mai bună carte de vizită pentru noi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg shadow-zinc-200/50 dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-zinc-100 dark:border-zinc-800 hover:-translate-y-2 transition-transform duration-500 overflow-hidden relative flex flex-col h-full">
              {/* Decorative Quote Icon Background */}
              <div className="absolute top-4 right-4 text-zinc-100 dark:text-zinc-800 opacity-50 transform group-hover:scale-110 group-hover:text-blue-50 dark:group-hover:text-zinc-800/80 transition-all duration-500">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.41 14.59C16.634 13.91 16.745 13.208 16.745 12.5C16.745 9.467 14.28 7 11.25 7H11V11.5H13.25C13.664 11.5 14 11.836 14 12.25C14 12.94 13.44 13.5 12.75 13.5H11.25C9.455 13.5 8 14.955 8 16.75C8 18.545 9.455 20 11.25 20H14.017V21Z" />
                  <path d="M5.017 21L7.41 14.59C7.634 13.91 7.745 13.208 7.745 12.5C7.745 9.467 5.28 7 2.25 7H2V11.5H4.25C4.664 11.5 5 11.836 5 12.25C5 12.94 4.44 13.5 3.75 13.5H2.25C0.455 13.5 -1 14.955 -1 16.75C-1 18.545 0.455 20 2.25 20H5.017V21Z" />
                </svg>
              </div>

              <div className="flex gap-1 mb-6 text-yellow-400 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-10 relative z-10 text-lg leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-blue-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-[var(--color-primary)] font-bold text-xl uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white font-heading">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
