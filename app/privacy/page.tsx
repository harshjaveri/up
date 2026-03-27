import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Upendra Publicity',
  description: 'Privacy Policy for Upendra Publicity — how we collect, use, and protect your data.',
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <h1
        className="section-title text-white mb-3"
        style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
      >
        Privacy <span className="gradient-text">Policy</span>
      </h1>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'rgba(255,255,255,.3)', letterSpacing: '.08em', marginBottom: '2.5rem' }}>
        Last updated: March 2026
      </p>

      <div className="space-y-10" style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.85, fontWeight: 300 }}>
        <Section title="1. Information We Collect">
          When you submit the contact form on our website, we collect: your name, company name, phone
          number, email address, enquired service, and your message. We do not collect any payment
          information or sensitive personal data.
        </Section>

        <Section title="2. How We Use Your Information">
          Information submitted via our contact form is used solely to:
          <ul className="mt-3 ml-5 space-y-1.5 list-disc">
            <li>Respond to your advertising inquiry</li>
            <li>Send you a customised proposal</li>
            <li>Follow up on your campaign requirements</li>
          </ul>
          We do not sell, trade, or rent your information to any third party.
        </Section>

        <Section title="3. Data Retention">
          Contact submissions are retained for a maximum of 12 months from the date of submission and
          are then permanently deleted unless an ongoing business relationship exists.
        </Section>

        <Section title="4. Data Security">
          All form submissions are transmitted over HTTPS. We implement server-side validation and
          rate limiting to protect against abuse. We do not store credit card or payment data.
        </Section>

        <Section title="5. Third-Party Services">
          Our website may embed Google Maps and load fonts from Google Fonts. These services have their
          own privacy policies. We do not use advertising trackers or share your data with social media
          platforms.
        </Section>

        <Section title="6. Your Rights (DPDP Act 2023 / IT Act)">
          Under applicable Indian data protection law, you have the right to:
          <ul className="mt-3 ml-5 space-y-1.5 list-disc">
            <li>Access your personal data we hold</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
          </ul>
          To exercise these rights, email us at the address below.
        </Section>

        <Section title="7. Contact">
          For any privacy-related queries, contact:
          <p className="mt-2">
            <strong style={{ color: 'rgba(255,255,255,.75)' }}>Upendra Publicity</strong><br />
            Email: <a href="mailto:info@upendrapublicity.com" style={{ color: 'var(--color-blue-electric)' }}>info@upendrapublicity.com</a><br />
            Chhatrapati Sambhajinagar, Maharashtra, India
          </p>
        </Section>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: '#fff', marginBottom: '0.75rem', letterSpacing: '-.01em' }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
