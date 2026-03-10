import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 bg-white dark:bg-zinc-950">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-6 max-w-4xl py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-zinc-900 dark:text-white">Politica de Utilizare a Cookie-urilor</h1>
        
        <div className="text-zinc-700 dark:text-zinc-300 space-y-6 leading-relaxed">
          <p>
            Platforma VitraFrame, aparținând <strong>VISA S.R.L.</strong>, folosește cookie-uri și/sau tehnologii similare pentru a asigura buna funcționare a site-ului web și pentru a stoca preferințele utilizatorilor, în conformitate cu Directiva 2002/58/CE (Directiva e-Privacy) completată de Regulamentul (UE) 2016/679 (GDPR).
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">1. Ce se înțelege prin Cookie-uri?</h2>
          <p>
            Un cookie este un fișier text de mici dimensiuni pe care un site îl salvează pe computerul sau dispozitivul dumneavoastră mobil atunci când îl vizitați. Cookie-urile ne ajută să vă recunoaștem browserul și să reținem acțiunile și preferințele dumneavoastră (cum ar fi preferința de consimțământ) pentru a nu mai fi nevoie să le reintroduceți de fiecare dată când reveniți.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">2. Ce cookie-uri folosim și în ce scop?</h2>
          <p>
            Acest web-site folosește <strong>exclusiv cookie-uri Strict Necesare</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Aceste fișiere sunt esențiale pentru ca site-ul nostru să funcționeze corect, în special pentru stocarea deciziei dumneavoastră legate de utilizarea cookie-urilor (prin salvarea opțiunii în local storage/cookie-ul `cookie-consent`).</li>
            <li><strong>Nu folosim cookie-uri de marketing, profilare, sau tracking (urmărire) de la terți.</strong> Nu monitorizăm istoricul dvs. de navigare pe alte pagini. Deoarece cookie-urile noastre sunt strict folosite pentru mecanismul de protecție al site-ului (și salvarea opțiunii dvs.), ele nu necesită consimțământul dumneavoastră prealabil conform legilor din România, însă respectăm principiul transparenței informându-vă de existența lor.</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">3. Durata de viață a cookie-urile</h2>
          <p>
            Cookie-urile noastre au o durată de viață determinată pre-programată. Cookie-ul care memorează faptul că sunteți de acord/înțelegeți cum prelucrăm datele expiră automat în termen de 365 de zile, sau atunci când curățați manual datele din browser.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">4. Cum puteți controla cookie-urile?</h2>
          <p>
            Puteți controla și/sau șterge cookie-urile după cum doriți (puteți bloca plasarea acestora). Detalii găsiți pe <a href="https://aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">aboutcookies.org</a>.
          </p>
          <p>
            Orice browser modern oferă posibilitatea de a modifica setările browserului pentru a împiedica plasarea cookie-urilor. 
            Modificarea acestor setări la navigatoare se regăsește, de regulă, în meniul de Setări (Settings) / Confidențialitate (Privacy).
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
