import type { Metadata } from 'next';
import Nav from '../components/Nav';
import NewsletterBanner from '../components/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Terms | eb. Private Travel Studio',
  description: 'Terms of service for eb. travel design studio.',
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Nav />
      <section className="pt-[140px] md:pt-[180px] pb-20 md:pb-28 px-6 md:px-12 flex-1">
        <div className="max-w-[760px] mx-auto">

          <div className="mb-12 md:mb-16">
            <div className="text-[10px] tracking-[0.35em] uppercase text-black/40 mb-5 font-light">
              Legal
            </div>
            <h1 className="text-[32px] md:text-[48px] leading-[1.05] text-[#2e5a88] font-light tracking-tight">
              Terms of Service
            </h1>
            <div className="text-[11px] text-black/40 font-light mt-4">
              Last updated: April 2026
            </div>
          </div>

          <div className="space-y-10 md:space-y-12 text-[14px] md:text-[15px] leading-[1.75] text-black/70 font-light">

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                1. About eb.
              </h2>
              <p className="mb-4">
                eb. is a travel design studio founded by Emma Bonnefous. Registered in France under SIRET 853 793 479 00017, 77 rue Bayen, 75017 Paris.
              </p>
              <p>
                eb. is not a travel agency. All journeys are curated by eb. and operated by our licensed DMC partners in Greece.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                2. Our Role
              </h2>
              <p>
                eb. designs bespoke journeys and introduces clients to our trusted network of licensed Destination Management Companies (DMCs) in Greece. Our DMC partners handle all operational aspects of your journey, including bookings, contracts, and payments.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                3. Bookings and Payments
              </h2>
              <p className="mb-4">
                Contracts for travel services are signed directly between the client and the DMC partner. All payments for travel services are made directly to the DMC partner. eb. is not a party to these contracts and does not receive client funds for travel services.
              </p>
              <p>
                The DMC partner is responsible for the delivery of all travel services and for any claims related to the operation of the journey.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                4. Pricing
              </h2>
              <p>
                Any price displayed on this website is indicative. Final pricing is confirmed by the DMC partner based on your dates, group size, accommodations, and experiences. Prices exclude international flights unless otherwise specified.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                5. Liability
              </h2>
              <p className="mb-4">
                eb. acts as a design studio and introducer. eb. is not responsible for the operation of travel services, including cancellations, delays, changes in itinerary, safety incidents, loss of property, or personal injury occurring during the journey.
              </p>
              <p>
                Clients are strongly advised to subscribe to comprehensive travel insurance before any journey.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                6. Intellectual Property
              </h2>
              <p>
                All content on this website (text, imagery, itineraries, brand identity) is the intellectual property of eb. and may not be reproduced without written consent.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                7. Data
              </h2>
              <p>
                Data submitted through inquiry forms is used solely to design your journey and connect you with the relevant DMC partner. See our <a href="/privacy-policy" className="text-[#2e5a88] underline underline-offset-2 hover:no-underline transition-all">Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                8. Governing Law
              </h2>
              <p>
                These terms are governed by French law. Any dispute will be submitted to the competent courts of Paris.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                9. Contact
              </h2>
              <p>
                <a href="mailto:hello@emmabonnefous.com" className="text-[#2e5a88] underline underline-offset-2 hover:no-underline transition-all">hello@emmabonnefous.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <footer data-nav-dark className="bg-[#1a1a1a] py-12 px-8 md:px-16">
        <NewsletterBanner />
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-t border-white/30" />
        </div>
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10 md:gap-8 mt-8">
          <div className="flex flex-col items-center md:items-start gap-4 order-1">
            <a href="/"><img src="/logo-beige.svg" alt="eb." className="h-7 w-auto opacity-80" /></a>
            <p className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider text-left">
              &copy; 2026 Emma Bonnefous &middot; Athens, Greece
            </p>
            <a href="mailto:hello@emmabonnefous.com" className="hidden md:block font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors">
              hello@emmabonnefous.com
            </a>
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-6 gap-y-2 font-body text-xs tracking-[0.15em] uppercase text-[#fcf7f1]/80 text-center md:text-right md:justify-end order-2 md:order-3">
            <a href="/influencer-production" className="hover:text-[#fcf7f1] transition-colors py-2">For Brands</a>
            <a href="/journal" className="hover:text-[#fcf7f1] transition-colors py-2">Journal</a>
            <a href="/about" className="hover:text-[#fcf7f1] transition-colors py-2">About</a>
            <a href="/contact" className="hover:text-[#fcf7f1] transition-colors py-2">Contact</a>
          </div>
          <div className="flex flex-col items-center gap-4 order-3 md:order-2">
            <div className="flex gap-4 font-body text-[11px] text-[#fcf7f1]/60 tracking-wider">
              <a href="https://www.instagram.com/emma_bonnefous_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">Instagram</a>
              <span className="py-2">&middot;</span>
              <a href="https://www.linkedin.com/in/emmabonnefous/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fcf7f1] transition-colors py-2">LinkedIn</a>
            </div>
            <div className="hidden md:flex gap-4 font-body text-[11px] text-[#fcf7f1]/40 tracking-wider">
              <a href="/privacy-policy" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Privacy Policy</a>
              <span className="py-2">&middot;</span>
              <a href="/terms" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Terms</a>
            </div>
          </div>
          <div className="flex md:hidden flex-col items-center gap-3 order-4">
            <a href="mailto:hello@emmabonnefous.com" className="font-body text-xs text-[#fcf7f1]/50 tracking-wider hover:text-[#fcf7f1]/80 transition-colors py-2">
              hello@emmabonnefous.com
            </a>
            <div className="flex gap-4 font-body text-[11px] text-[#fcf7f1]/40 tracking-wider">
              <a href="/privacy-policy" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Privacy Policy</a>
              <span className="py-2">&middot;</span>
              <a href="/terms" className="hover:text-[#fcf7f1]/80 transition-colors py-2">Terms</a>
            </div>
            <p className="font-body text-xs text-[#fcf7f1]/50 tracking-wider text-center">
              &copy; 2026 Emma Bonnefous &middot; Athens, Greece
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10">
          <p className="text-[10px] md:text-[11px] text-white/35 font-light leading-[1.5] max-w-[540px] mx-auto md:mx-0 text-center md:text-left">
            eb. is a travel design studio. All journeys are operated by our licensed DMC partners in Greece.
          </p>
        </div>
      </footer>
    </main>
  );
}
