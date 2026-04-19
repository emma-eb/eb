import type { Metadata } from 'next';
import Nav from '../components/Nav';
import NewsletterBanner from '../components/NewsletterBanner';
import BackToExploring from "../components/BackToExploring";

export const metadata: Metadata = {
  title: 'Privacy Policy | eb. Private Travel Studio',
  description: 'Privacy policy for eb. travel design studio. GDPR compliant.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Nav />
      <section className="pt-[140px] md:pt-[180px] pb-20 md:pb-28 px-6 md:px-12 flex-1">
        <div className="max-w-[760px] mx-auto">

          <div className="mb-12 md:mb-16">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#1a1a1a]/40 mb-5 font-light">
              Legal
            </div>
            <h1 className="text-[32px] md:text-[48px] leading-[1.05] text-[#2e5a88] font-light tracking-tight">
              Privacy Policy
            </h1>
            <div className="text-[11px] text-[#1a1a1a]/40 font-light mt-4">
              Last updated: April 2026
            </div>
          </div>

          <div className="space-y-10 md:space-y-12 text-[14px] md:text-[15px] leading-[1.75] text-[#1a1a1a]/70 font-light">

            <div>
              <p>
                eb. is committed to protecting your privacy. This policy explains what personal data we collect, how we use it, and your rights under the European General Data Protection Regulation (GDPR).
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                1. Data Controller
              </h2>
              <p className="mb-4">
                The data controller is eb., a travel design studio founded by Emma Bonnefous. Registered in France under SIRET 853 793 479 00017, 77 rue Bayen, 75017 Paris.
              </p>
              <p>
                For any question regarding this policy, contact <a href="mailto:hello@emmabonnefous.com" className="text-[#2e5a88] underline underline-offset-2 hover:no-underline transition-all">hello@emmabonnefous.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                2. What Data We Collect
              </h2>
              <p className="mb-4">
                When you submit an inquiry through our website, we collect the information you provide: your name, email address, phone number (optional), travel dates, party size, preferences, and any additional context you choose to share.
              </p>
              <p>
                When you subscribe to our newsletter, we collect your email address.
              </p>
              <p className="mt-4">
                We do not collect special categories of personal data (health, religion, political opinions, etc.).
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                3. Why We Collect It
              </h2>
              <p className="mb-4">
                We use your data to:
              </p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Design a journey tailored to your request.</li>
                <li className="list-disc">Connect you with our licensed DMC partners in Greece, who operate the journey.</li>
                <li className="list-disc">Respond to your questions and keep you informed during the planning.</li>
                <li className="list-disc">Send occasional editorial updates if you have subscribed to the newsletter.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                4. Legal Basis
              </h2>
              <p className="mb-4">
                We process your data on the following legal bases, as defined by Article 6 of the GDPR:
              </p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Performance of a pre-contractual or contractual relationship when you request a journey.</li>
                <li className="list-disc">Your consent, when you subscribe to the newsletter.</li>
                <li className="list-disc">Our legitimate interest in responding to your inquiries and improving our services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                5. Who We Share It With
              </h2>
              <p className="mb-4">
                Your data is shared only with parties that are necessary to deliver the service you request:
              </p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Our licensed DMC partners in Greece, who handle the operation of your journey.</li>
                <li className="list-disc">Our email and hosting providers, who process data on our behalf under data-processing agreements compliant with the GDPR.</li>
              </ul>
              <p className="mt-4">
                We never sell or rent your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                6. International Transfers
              </h2>
              <p>
                Our DMC partners are located in Greece, within the European Union. If, exceptionally, data is transferred outside the EU (for example to a specialized supplier), we rely on the European Commission&apos;s Standard Contractual Clauses or equivalent safeguards to protect your data.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                7. Retention
              </h2>
              <p>
                Inquiry data is retained for up to 3 years after our last exchange, to allow continuity of service. Newsletter data is retained until you unsubscribe. Invoicing data is retained for 10 years, as required by French accounting law.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                8. Your Rights
              </h2>
              <p className="mb-4">
                Under the GDPR, you have the right to:
              </p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Access the data we hold about you.</li>
                <li className="list-disc">Request correction of inaccurate data.</li>
                <li className="list-disc">Request deletion of your data (right to be forgotten).</li>
                <li className="list-disc">Request portability of your data in a structured format.</li>
                <li className="list-disc">Restrict or object to the processing of your data.</li>
                <li className="list-disc">Withdraw your consent at any time, where consent is the legal basis.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact <a href="mailto:hello@emmabonnefous.com" className="text-[#2e5a88] underline underline-offset-2 hover:no-underline transition-all">hello@emmabonnefous.com</a>. We respond within one month.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                9. Cookies and Analytics
              </h2>
              <p className="mb-4">
                Our website uses essential cookies required for basic functionality. We may also use privacy-respecting analytics to understand how the site is used, without tracking individual visitors.
              </p>
              <p>
                You can configure your browser to refuse cookies at any time.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                10. Complaints
              </h2>
              <p>
                If you believe your rights have not been respected, you may file a complaint with the French data protection authority, the CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#2e5a88] underline underline-offset-2 hover:no-underline transition-all">www.cnil.fr</a>), or with the data protection authority of your country of residence within the EU.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this policy from time to time. The current version is always available on this page, with the last updated date at the top.
              </p>
            </div>

            <div>
              <h2 className="text-[18px] md:text-[22px] text-[#2e5a88] font-light mb-4">
                12. Contact
              </h2>
              <p>
                <a href="mailto:hello@emmabonnefous.com" className="text-[#2e5a88] underline underline-offset-2 hover:no-underline transition-all">hello@emmabonnefous.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <BackToExploring />

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
