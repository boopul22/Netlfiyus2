import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Auto File Claim</title>
        <meta name="description" content="Privacy Policy for Auto File Claim. Learn how we collect, use, and protect your personal information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
              Privacy Policy
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
                Welcome to Auto File Claim. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">2</span>
                Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">Personal Information</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                      <span>Full name, email address, phone number, and address</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                      <span>Vehicle details and accident information</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                      <span>Insurance policy information</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                      <span>Any documents uploaded by you</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">Non-Personal Information</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                      <span>Browser type and IP address</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                      <span>Pages visited and usage data</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                      <span>Information collected via cookies or analytics tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">3</span>
                How We Use Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Process car accident claims</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Communicate with you regarding your claim</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Improve our services and website</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">4</span>
                Sharing of Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Insurance companies and legal representatives to process your claim</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Third-party service providers who assist in website operations</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Government or legal authorities when required by law</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">5</span>
                Data Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We implement reasonable security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute protection.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">6</span>
                Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Access or correct your personal data</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3182ce] rounded-full"></span>
                  <span>Withdraw consent for data processing</span>
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">7</span>
                Third-Party Links
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our Site may contain links to other websites. We are not responsible for the content or privacy practices of such sites.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-[#3182ce] text-white text-sm font-bold rounded-full">8</span>
                Changes to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new effective date.
              </p>
            </section>

            {/* Contact Section */}
            <section className="border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
                Questions About This Policy?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us:
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
