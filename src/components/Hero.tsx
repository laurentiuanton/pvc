'use client';

import { ArrowRight, ShieldCheck, ThermometerSnowflake, VolumeX } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden bg-zinc-950">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60 z-10" />
        <img
          src="/hero_sample_image_1773089537968.png"
          alt="Design modern de casă cu ferestre premium din PVC și aluminiu"
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
        />
        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[var(--color-primary)]/20 rounded-full blur-[120px] mix-blend-screen z-10 animate-pulse-slow" />
      </div>

      <div className="container relative z-20 mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-[var(--color-primary)] uppercase mb-6 flex justify-center md:justify-start items-center gap-2 font-heading">
            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></span>
            Calitate Garantată
          </h2>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight font-heading">
            Ferestre care opresc <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-primary)]">frigul</span> și <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-white">zgomotul</span>.
          </h1>

          <p className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-light">
            Tâmplărie PVC și Aluminiu premium pentru casa ta realizată cu geam termopan sau tripan. Peste 10 ani de experiență în montaj profesional clasic sau conform standardelor de eficiență energetică.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--color-primary)]/40 active:scale-95"
            >
              Solicită acum o ofertă personalizată
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portofoliu"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-md transition-all active:scale-95"
            >
              Vezi lucrările noastre
            </a>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 pb-16 border-t border-white/10 ml-0 lg:ml-8 max-w-4xl">
            <div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 bg-black/20 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
              <div className="bg-blue-500/10 p-4 rounded-xl text-blue-400 shrink-0">
                <ThermometerSnowflake size={34} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg font-heading">Izolare Termică</h3>
                <p className="text-zinc-400 text-sm mt-1.5 leading-relaxed">Facturi reduse iarna, răcoare vara.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 bg-black/20 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
              <div className="bg-zinc-500/10 p-4 rounded-xl text-zinc-300 shrink-0">
                <VolumeX size={34} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg font-heading">Barieră fonică</h3>
                <p className="text-zinc-400 text-sm mt-1.5 leading-relaxed">Liniște absolută în interiorul casei.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 bg-black/20 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
              <div className="bg-orange-500/10 p-4 rounded-xl text-[var(--color-secondary)] shrink-0">
                <ShieldCheck size={34} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg font-heading">Montaj Acreditat</h3>
                <p className="text-zinc-400 text-sm mt-1.5 leading-relaxed">Garanție extinsă și execuție perfectă.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
