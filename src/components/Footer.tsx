import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white font-bold text-2xl tracking-tight font-heading">
                Vitra<span className="text-[var(--color-primary)]">Frame</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              VitraFrame este un brand deținut și operat de <strong>VISA S.R.L.</strong>, companie cu o vastă experiență în tâmplărie premium din PVC și Aluminiu. 
            </p>
            <div className="space-y-2 text-sm">
              <p><strong className="text-zinc-300">CUI:</strong> 6146812</p>
              <p><strong className="text-zinc-300">Nr. Înreg:</strong> J1994001105206</p>
              <p><strong className="text-zinc-300">EUID:</strong> ROONRC.J1994001105206</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 md:pl-10">
            <h4 className="text-white font-bold mb-6 font-heading">Informații Legale</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/termeni-si-conditii" className="hover:text-[var(--color-primary)] transition-colors">Termeni și Condiții</Link></li>
              <li><Link href="/politica-de-confidentialitate" className="hover:text-[var(--color-primary)] transition-colors">Politică de Confidențialitate</Link></li>
              <li><Link href="/politica-de-cookies" className="hover:text-[var(--color-primary)] transition-colors">Politică de Cookie-uri</Link></li>
            </ul>
          </div>

          {/* ANPC & Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading">Suport Clienți</h4>
            <div className="space-y-2 text-sm mb-6">
              <p><strong className="text-zinc-300">Telefon:</strong> <a href="tel:0254545454" className="hover:text-[var(--color-primary)] transition-colors">0254 545 454</a></p>
              <p><strong className="text-zinc-300">Program:</strong> L-V: 08:00 - 16:00</p>
            </div>
              <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-white rounded-xl p-3 flex-shrink-0 w-56 hover:shadow-lg transition-all border border-zinc-200">
                <span className="text-xs font-extrabold text-[#004A99] uppercase tracking-wide">ANPC - SAL</span>
                <span className="text-[10px] font-semibold text-zinc-600 text-center leading-tight mt-1">Soluționarea Alternativă a Litigiilor</span>
              </a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-white rounded-xl p-3 flex-shrink-0 w-56 hover:shadow-lg transition-all border border-zinc-200">
                <span className="text-xs font-extrabold text-[#004A99] uppercase tracking-wide">ANPC - SOL</span>
                <span className="text-[10px] font-semibold text-zinc-600 text-center leading-tight mt-1">Soluționarea Online a Litigiilor</span>
              </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col items-center justify-center border-t border-zinc-800 text-center text-xs space-y-2">
          <p>
            &copy; {new Date().getFullYear()} VISA S.R.L. Toate drepturile rezervate. Platformă operată în conformitate cu legislația din România.
          </p>
          <p className="text-zinc-500">
            Design & Development de <a href="tel:+40735415875" className="text-zinc-400 font-medium hover:text-[var(--color-primary)] transition-colors">Laurențiu Anton</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
