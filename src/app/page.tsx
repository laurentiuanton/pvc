import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustSection } from '@/components/TrustSection';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { SocialProof } from '@/components/SocialProof';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <Portfolio />
      <SocialProof />
      <ContactCTA />
      <Footer />
    </main>
  );
}
