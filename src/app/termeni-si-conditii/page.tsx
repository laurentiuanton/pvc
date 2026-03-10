import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermeniSiConditiiPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 bg-white dark:bg-zinc-950">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-6 max-w-4xl py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-zinc-900 dark:text-white">Termeni și Condiții</h1>
        
        <div className="text-zinc-700 dark:text-zinc-300 space-y-6 leading-relaxed">
          <p>
            Bine ați venit pe site-ul VitraFrame. Utilizarea acestui site implică acceptarea acestor termeni și condiții. Vă rugăm să le citiți cu atenție.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">1. Informații Generale</h2>
          <p>
            Acest site este operat de VitraFrame. Informațiile prezentate pe acest site au rol informativ și prezintă serviciile noastre de tâmplărie PVC și aluminiu. Ne adresăm clienților care doresc servicii de montaj pentru locuințe sau spații comerciale.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">2. Servicii și Oferte</h2>
          <p>
            Ofertele de preț estimative pot suferi modificări. Costul final al unei lucrări și măsurătorile finale vor fi stabilite doar după o vizită la locația clientului. Formularul de pe site are rol de cerere de preț / solicitare măsurătoare și nu constituie un contract cu efecte juridice.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">3. Drepturi de Autor</h2>
          <p>
            Tot conținutul existent pe acest site (inclusiv dar fără a se limita la imagini, texte, elemente de grafică) este proprietatea VitraFrame sau a partenerilor săi și este protejat de legea drepturilor de autor.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">4. Modificări ale Termenilor</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment, fără notificare prealabilă. Vă recomandăm să revizitați această pagină periodic pentru actualizări.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
