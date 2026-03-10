export function Portfolio() {
  const projects = [
    {
      title: 'Vilă modernă',
      category: 'Tâmplărie PVC Premium',
      image: '/portfolio_1.png',
    },
    {
      title: 'Închidere Balcon',
      category: 'Confort Urban',
      image: '/portfolio_2.png',
    },
    {
      title: 'Living Panorame',
      category: 'Design Interior',
      image: '/portfolio_3.png',
    },
    {
      title: 'Ansamblu Living Luminos',
      category: 'Salamander cu Tripan',
      image: '/portfolio_4.png',
    },
    {
      title: 'Vitrină Comercială',
      category: 'Tâmplărie Aluminiu Reynaers',
      image: '/portfolio_5.png',
    },
    {
      title: 'Închidere Terasă',
      category: 'Sisteme Culisante',
      image: '/portfolio_6.png',
    },
  ];

  return (
    <section id="portofoliu" className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase mb-3 text-left font-heading">Lucrări Recente</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 font-heading">Portofoliu VitraFrame</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Imaginile vorbesc de la sine. Fiecare lucrare este o dovadă a calității execuției și a atenției noastre la detalii.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center justify-center bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-6 py-3 rounded-xl font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm">
            Vezi toată galeria
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 h-[400px]">
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-[1.05]" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="inline-flex max-w-fit px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full shadow-sm border border-white/20">
                  {project.category}
                </span>
                <h4 className="text-2xl font-extrabold text-white mb-2 leading-tight font-heading">{project.title}</h4>
                <div className="w-12 h-1.5 bg-[var(--color-primary)] rounded-full mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <button className="inline-flex items-center justify-center bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white px-8 py-4 rounded-xl font-bold w-full active:scale-95 transition-transform">
            Vezi toată galeria
          </button>
        </div>
      </div>
    </section>
  );
}
