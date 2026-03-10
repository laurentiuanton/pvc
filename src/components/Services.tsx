import { ShieldCheck, Drill, Bug, Blinds, ArrowRight, Home, Wind, Shield, Wrench } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Montaj Tâmplărie PVC',
      description: 'Montaj profesional cu benzi precomprimate și spumă flexibilă pentru barieră termică perfectă.',
      icon: <Home className="text-[var(--color-primary)] w-6 h-6" />,
      image: '/service_montaj.png'
    },
    {
      title: 'Plase Insecte',
      description: 'Sisteme tip rulou sau plisee, perfect integrate, care îți protejează casa fără a bloca lumina.',
      icon: <Wind className="text-zinc-600 dark:text-[var(--color-secondary)] w-6 h-6" />,
      image: '/service_plase.png'
    },
    {
      title: 'Rulouri Exterioare',
      description: 'Confort termic sporit, umbrire completă și un plus de siguranță anti-efracție.',
      icon: <Shield className="text-[var(--color-primary)] w-6 h-6" />,
      image: '/service_rulouri.png'
    },
    {
      title: 'Reparații & Mentenanță',
      description: 'Reglaje fine, înlocuire feronerie și chedere pentru ferestre care au început să cedeze.',
      icon: <Wrench className="text-orange-500 w-6 h-6" />,
      image: '/service_reparatii.png'
    },
  ];

  return (
    <section id="servicii" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase mb-3 font-heading">Serviciile Noastre</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 font-heading">Expertiză completă în Tâmplărie</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            De la producție și montaj, până la reparații complexe, ne ocupăm de tot ce înseamnă tâmplărie PVC și aluminiu. Echipa noastră este pregătită.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 transform hover:-translate-y-2 border border-zinc-100 dark:border-zinc-800"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-80" />
                <div className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative bg-white dark:bg-zinc-900 z-10">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors font-heading">{service.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-[var(--color-primary)] font-bold text-sm hover:text-blue-800 dark:hover:text-blue-400 transition-colors mt-auto group-hover:gap-2 gap-1 relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-1">Cere detalii <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
