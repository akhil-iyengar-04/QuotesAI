import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Operand",
  description: "Privacy policy and data protection information for Operand users.",
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className="container py-8 md:py-12 lg:py-24">
        
        <article className="prose prose-invert prose-headings:scroll-mt-20 prose-h1:text-5xl prose-h2:text-3xl prose-h3:text-2xl">
          
          <h1 className="mb-4 font-bold">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: February 20, 2025</p>

          <h2 className="mt-10 mb-4 font-bold">Introduction</h2>
          <p className="mb-8">
            Operand, Inc. ("Operand," "we," "us," or "our") is an AI-powered e-commerce consulting service. We respect
            your privacy and are committed to protecting personal data. This policy summarizes what data we collect and
            how we handle it when you visit our website or otherwise interact with us online.
          </p>

          <h2 className="mt-10 mb-4 font-bold">1. Data We Collect on Our Website</h2>
          <ul className="mb-8">
            <li>
              Website Usage Data: Our website provider may automatically collect certain information
              (e.g., IP addresses, cookies, and device data) for analytics and to ensure our site functions properly.
            </li>
            <li>
              Contact Information: If you submit a form or contact us, we will collect the details you
              provide (e.g., name, email) to respond to your inquiries.
            </li>
          </ul>
          <p className="mb-8">
            We do not sell or rent your personal data. We use third-party service providers (e.g., web hosting) strictly
            for our business needs.
          </p>

          <h2 className="mt-10 mb-4 font-bold">2. How We Use Your Data</h2>
          <ul className="mb-8">
            <li>
              Communications: To respond to questions, comments, or requests.
            </li>
            <li>
              Site Improvement: To analyze site performance and improve user experience.
            </li>
            <li>
              Legal/Compliance: To comply with applicable laws or protect our legal rights.
            </li>
          </ul>

          <h2 className="mt-10 mb-4 font-bold">3. Cookies & Similar Technologies</h2>
          <p className="mb-8">
            We may use cookies and similar technologies to enhance site functionality and collect usage statistics. Where
            required by law, we will request your consent. You can manage your cookie preferences in your browser
            settings.
          </p>

          <h2 className="mt-10 mb-4 font-bold">4. Data Retention & Security</h2>
          <ul className="mb-8">
            <li>
              Retention: We keep your data only as long as necessary for our purposes, after which it is
              either anonymized or deleted.
            </li>
            <li>
              Security Measures: We employ technical and organizational measures (e.g., encryption,
              access controls) to protect data from unauthorized access or disclosure.
            </li>
          </ul>

          <h2 className="mt-10 mb-4 font-bold">5. Your Rights</h2>
          <ul className="mb-8">
            <li>
              GDPR (EU/EEA/UK): You may have the right to request access, correction, or deletion of
              personal data we hold about you.
            </li>
            <li>
              CCPA (California): California residents may have the right to know, delete, or opt out of
              the "sale" or "sharing" of personal data. We do not sell personal data.
            </li>
          </ul>

          <p className="mb-8">
            <br />
            If you want to exercise your privacy rights, please contact our Data Privacy Officer at ram@tryoperand.com.
          </p>

          <h2 className="mt-10 mb-4 font-bold">6. International Data Transfers</h2>
          <p className="mb-8">
            We may store and process data in the United States or other countries. Where applicable, we use lawful
            transfer mechanisms (e.g., Standard Contractual Clauses) to protect your data.
          </p>

          <h2 className="mt-10 mb-4 font-bold">7. Changes to this Policy</h2>
          <p className="mb-8">
            We may update this policy. The "Last Updated" date at the top indicates the latest revision. Material changes
            will be posted on our website or otherwise communicated.
          </p>

          <h2 className="mt-10 mb-4 font-bold">8. Contact Us</h2>
          <p className="mb-8">If you have any questions or concerns about our privacy practices, please contact us at:</p>
          <ul className="mb-8">
            <li>Email: ram@tryoperand.com</li>
            <li>Mail: Operand, Inc., 825 West End Avenue, New York City, NY 10025, USA</li>
          </ul>

          <p className="text-sm text-muted-foreground mt-8">
            This policy is for our website visitors and general inquiries. If you are a client or interested in how we
            handle e-commerce/store data, please refer to our Client Data Privacy Policy available upon request.
          </p>
        </article>
        
      </section>
    </>
  )
}

