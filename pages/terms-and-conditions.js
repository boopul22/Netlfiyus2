import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Auto File Claim</title>
        <meta name="description" content="Terms and Conditions for Auto File Claim services. Read our terms of service and usage policies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
              Terms and Conditions
            </h1>
            <p className="text-slate-600">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">1</span>
                Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms and Conditions govern your access to and use of the Auto File Claim website and services.
                By using our Site and services, you agree to these Terms. If you do not agree, please do not use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">2</span>
                Services Offered
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Auto File Claim assists individuals in filing and managing car accident claims. We are not an insurance company.
                Our platform helps facilitate the claims process by collecting relevant information and submitting it to insurers or legal partners.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">3</span>
                Eligibility
              </h2>
              <p className="text-slate-600 leading-relaxed">
                You must be at least 18 years old and capable of entering a legally binding agreement to use our services.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">4</span>
                User Responsibilities
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Provide accurate, current, and complete information</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Not misuse our platform for unlawful purposes</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Maintain confidentiality of any login credentials (if applicable)</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">5</span>
                Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All content on our Site, including text, logos, images, and software, is the property of Auto File Claim or its licensors
                and is protected by copyright laws.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">6</span>
                Disclaimer
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We do not guarantee the outcome of any claim. Results may vary based on the information provided,
                the nature of the incident, and third-party decisions (e.g., insurance companies).
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">7</span>
                Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Auto File Claim shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">8</span>
                Termination
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to suspend or terminate your access to the Site if you violate these Terms.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">9</span>
                Governing Law
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms shall be governed by the laws of Florida, USA, without regard to conflict of law principles.
              </p>
            </section>

            {/* Contact Section */}
            <section className="border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-slate-50 rounded-xl p-6 space-y-3">
                <p className="flex items-center gap-3 text-slate-700">
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:8884080938" className="text-[#3182ce] hover:underline">888 408 0938</a>
                </p>
                <p className="flex items-center gap-3 text-slate-700">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:info@auto-file-claim.com" className="text-[#3182ce] hover:underline">info@auto-file-claim.com</a>
                </p>
                <p className="flex items-center gap-3 text-slate-700">
                  <span className="font-semibold">Address:</span>
                  <span>Florida, USA</span>
                </p>
              </div>
            </section>

          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Ready to file your claim?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3182ce] text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              Get Free Claim Now
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
