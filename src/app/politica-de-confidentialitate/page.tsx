import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PoliticaConfidentialitatePage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 bg-white dark:bg-zinc-950">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-6 max-w-4xl py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-zinc-900 dark:text-white">Politica de Confidențialitate (GDPR)</h1>
        
        <div className="text-zinc-700 dark:text-zinc-300 space-y-6 leading-relaxed">
          <p>
            Vă aducem la cunoștință că operatorul prelucrării datelor cu caracter personal pe site-ul VitraFrame este compania <strong>VISA S.R.L.</strong> (CUI: 6146812, Nr. Reg. Com.: J1994001105206, EUID: ROONRC.J1994001105206). Protecția datelor dumneavoastră este o prioritate absolută pentru noi și este tratată în conformitate cu Regulamentul (UE) 2016/679 (Regulamentul General privind Protecția Datelor - GDPR) și cu legislația românească în vigoare, în special Legea nr. 190/2018.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">1. Ce date colectăm?</h2>
          <p>
            Prin intermediul formularelor electronice prezente pe acest site, colectăm direct de la utilizatori următoarele categorii de date:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Numele și prenumele dumneavoastră</li>
            <li>Numărul de telefon de contact</li>
            <li>Adresă aproximativă/județul sau sectorul (obținută exclusiv voluntar, pentru evaluarea deplasărilor echipelor noastre tehnice)</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">2. Temeiul și scopul prelucrării</h2>
          <p>
            Conform art. 6 alin. 1 lit. b) și f) din GDPR, prelucrăm datele furnizate exclusiv în următoarele scopuri:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Efectuarea demersurilor la cererea dumneavoastră (de tip ofertare) înainte de încheierea unui contract de prestări servicii/montaj.</li>
            <li>Contactarea telefonică a dumneavoastră în vederea stabilirii detaliilor logistice pentru măsurătorile fizice la locație.</li>
            <li>Răspunsul la mesaje sau solicitări transmise.</li>
          </ul>
          <p><strong>VISA S.R.L.</strong> se angajează să nu folosească aceste date pentru acțiuni de marketing direct (ex: newslettere) fără consimțământul dvs. adițional explicit.</p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">3. Cu cine partajăm datele?</h2>
          <p>
            Datele dumneavoastră sunt procesate exclusiv de către personalul <strong>VISA S.R.L.</strong>. Nu vindem, nu închiriem și nu transferăm datele dumneavoastră către terțe companii comerciale. Excepții fac doar autoritățile statului, în cazul în care legislația ne obligă la comunicarea acestora (ex: ANAF în scop contabil/fiscal la facturare).
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">4. Perioada de stocare</h2>
          <p>
            Datele preluate prin formularul de contact vor fi păstrate strict perioada necesară derulării corespondenței cu dumneavoastră, însemnând maxim 12 luni de la ultima interacțiune, dacă nu a condus la o comandă fizică. În cazul unui contract finalizat, datele contabile privind facturarea sunt păstrate timp de 10 ani pentru conformitatea cu legislația financiar-contabilă din România.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">5. Drepturile Dumneavoastră</h2>
          <p>
            Conform legislației, beneficiați de „Dreptul la informare”, „Dreptul de acces”, „Dreptul la rectificare”, „Dreptul la ștergere (dreptul de a fi uitat)”, și „Dreptul la restricționare a prelucrării”. Puteți exercita aceste drepturi prin transmiterea unei cereri informale către datele noastre de contact de pe site (la tel: 0254 545 454). Puteți de asemenea să vă adresați cu o plângere către <a href="https://www.dataprotection.ro/" target="_blank" className="text-blue-500 hover:text-blue-700 underline">A.N.S.P.D.C.P.</a>.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
